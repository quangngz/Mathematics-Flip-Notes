import React, { useMemo, useState } from 'react';
import { cards } from './cards';
import './styles.css';

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

  return (
    <main>
      <header className="page-header">
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

      {[...topics].map(([topic, topicCards]) => (
        <section className="topic" key={topic}>
          <h2>{topic}</h2>
          <div className="grid">
            {topicCards.map((card) => (
              <Card card={card} forceFlipped={forceFlipped} key={`${card.topic}-${card.title}`} />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
