import React, { useMemo, useState } from 'react';
import { cards } from './cards';
import './styles.css';

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function getChapter(topic) {
  const match = topic.match(/^(\d+)\.\s*(.*)$/);
  return {
    id: match ? match[1] : topic,
    title: match ? `Chapter ${match[1]}` : topic,
  };
}

function readScript(text, start) {
  if (text[start] === '{') {
    const end = text.indexOf('}', start + 1);
    if (end !== -1) {
      return { value: text.slice(start + 1, end), next: end + 1 };
    }
  }

  const match = text.slice(start).match(/^([A-Za-z0-9+\-∞π_,=→←]+)/);
  if (match) {
    return { value: match[1], next: start + match[1].length };
  }

  return { value: text[start] ?? '', next: start + 1 };
}

function renderScriptedMath(text) {
  const pieces = [];
  let buffer = '';

  const flush = () => {
    if (buffer) {
      pieces.push(buffer);
      buffer = '';
    }
  };

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];

    if ((char === '_' || char === '^') && index + 1 < text.length) {
      flush();
      const script = readScript(text, index + 1);
      const Tag = char === '_' ? 'sub' : 'sup';
      pieces.push(<Tag key={`${char}-${index}`}>{script.value}</Tag>);
      index = script.next - 1;
      continue;
    }

    buffer += char;
  }

  flush();
  return pieces;
}

function renderInlineMath(text) {
  const pieces = [];
  const pattern = /lim_\{([^}]+)\}|((?:[A-Za-zΣ∫π]+|___)(?:_\{[^}]+\}|_[A-Za-z0-9]+|\^\{[^}]+\}|\^[A-Za-z0-9∞π]+)+)|(\|[^|]+\|)/g;
  let index = 0;
  let match;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > index) {
      pieces.push(text.slice(index, match.index));
    }

    if (match[1]) {
      pieces.push(
        <span className="math-inline math-lim" key={match.index}>
          <span>lim</span>
          <sub>{match[1]}</sub>
        </span>,
      );
    } else {
      pieces.push(
        <span className="math-inline" key={match.index}>
          {renderScriptedMath(match[0])}
        </span>,
      );
    }

    index = pattern.lastIndex;
  }

  if (index < text.length) {
    pieces.push(text.slice(index));
  }

  return pieces;
}

function MathText({ text }) {
  return (
    <div className="math-text">
      {text.split('\n').map((line, index) => (
        <div className="math-line" key={index}>
          {line.length ? renderInlineMath(line) : '\u00a0'}
        </div>
      ))}
    </div>
  );
}

function Card({ card, forceFlipped }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const flipped = forceFlipped ?? isFlipped;

  return (
    <article className={`card ${flipped ? 'flipped' : ''}`}>
      <button
        className="inner"
        type="button"
        onClick={() => setIsFlipped((value) => !value)}
        aria-pressed={flipped}
        aria-label={`${flipped ? 'Back' : 'Front'} of ${card.title}`}
      >
        <div className="face front">
          <div className="label">Front</div>
          <h3 className="title">{card.title}</h3>
          <MathText text={card.front} />
          <div className="source">{card.source}</div>
        </div>
        <div className="face back">
          <div className="label">Back</div>
          <h3 className="title">{card.title}</h3>
          <MathText text={card.back} />
          <div className="source">{card.source}</div>
        </div>
      </button>
    </article>
  );
}

export default function App() {
  const [forceFlipped, setForceFlipped] = useState(null);
  const topics = useMemo(
    () =>
      cards.reduce((groups, card) => {
        if (!groups.has(card.topic)) {
          groups.set(card.topic, []);
        }
        groups.get(card.topic).push(card);
        return groups;
      }, new Map()),
    [],
  );
  const chapters = useMemo(() => {
    const groups = new Map();

    cards.forEach((card) => {
      const chapter = getChapter(card.topic);
      const chapterKey = `chapter-${slugify(chapter.id)}`;

      if (!groups.has(chapterKey)) {
        groups.set(chapterKey, {
          ...chapter,
          key: chapterKey,
          count: 0,
          topics: new Map(),
        });
      }

      const group = groups.get(chapterKey);
      group.count += 1;

      if (!group.topics.has(card.topic)) {
        group.topics.set(card.topic, 0);
      }

      group.topics.set(card.topic, group.topics.get(card.topic) + 1);
    });

    return [...groups.values()].map((chapter) => ({
      ...chapter,
      topics: [...chapter.topics].map(([topic, count]) => ({ topic, count })),
    }));
  }, []);

  return (
    <div className="app-shell">
      <aside className="bookmark-panel" aria-label="Chapter bookmarks">
        <div className="bookmark-title">Bookmarks</div>
        <nav className="chapter-list">
          {chapters.map((chapter) => (
            <a className="chapter-bookmark" href={`#${chapter.key}`} key={chapter.key}>
              <span className="bookmark-icon" aria-hidden="true" />
              <span className="bookmark-copy">
                <span className="bookmark-name">{chapter.title}</span>
                <span className="bookmark-meta">{chapter.count} cards</span>
              </span>
            </a>
          ))}
        </nav>
      </aside>

      <main>
        <header className="page-header">
          <div className="page-kicker">Study Deck</div>
          <h1>Real Analysis Theorem Flip Cards</h1>
          <p className="sub">Total cards: {cards.length}. Click a card to flip it.</p>
        </header>

        <div className="controls" aria-label="Card controls">
          <button type="button" onClick={() => setForceFlipped(false)}>
            Show all fronts
          </button>
          <button type="button" onClick={() => setForceFlipped(true)}>
            Show all backs
          </button>
          <button type="button" onClick={() => setForceFlipped(null)}>
            Study mode
          </button>
        </div>

        {chapters.map((chapter) => (
          <section className="chapter" id={chapter.key} key={chapter.key}>
            <header className="chapter-header">
              <div>
                <div className="chapter-label">Bookmark</div>
                <h2>{chapter.title}</h2>
              </div>
              <span>{chapter.count} cards</span>
            </header>

            {chapter.topics.map(({ topic, count }) => {
              const topicCards = topics.get(topic);

              return (
                <section className="topic" key={topic}>
                  <div className="topic-heading">
                    <h3>{topic}</h3>
                    <span>{count}</span>
                  </div>
                  <div className="grid">
                    {topicCards.map((card) => (
                      <Card
                        card={card}
                        forceFlipped={forceFlipped}
                        key={`${card.topic}-${card.title}`}
                      />
                    ))}
                  </div>
                </section>
              );
            })}
          </section>
        ))}
      </main>
    </div>
  );
}
