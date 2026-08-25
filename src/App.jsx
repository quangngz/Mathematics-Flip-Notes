import React, { useEffect, useMemo, useState } from 'react';
import { cards } from './cards';
import { dependencies, metricCards, metricSections, prerequisites } from './metricCards';
import './styles.css';

const slugify = value => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
function MathText({ text }) { return <div className="math-text">{text.split('\n').map((line, i) => <div className="math-line" key={i}>{line || '\u00a0'}</div>)}</div>; }
function Card({ id, title, front, back, source, forceFlipped, frontLabel = 'Statement', backLabel = 'Proof skeleton', kind = 'theorem' }) {
  const [ownFlip, setOwnFlip] = useState(false); const flipped = forceFlipped ?? ownFlip;
  return <article className={`card ${kind} ${flipped ? 'flipped' : ''}`} id={id}><button className="inner" type="button" onClick={() => setOwnFlip(v => !v)} aria-pressed={flipped} aria-label={`${flipped ? backLabel : frontLabel} of ${title}`}>
    <div className="face front"><div className="label">{frontLabel}</div><h3 className="title">{title}</h3><MathText text={front}/><div className="flip-hint">Click to flip →</div><div className="source">{source}</div></div>
    <div className="face back"><div className="label">{backLabel}</div><h3 className="title">{title}</h3>{typeof back === 'string' ? <MathText text={back}/> : back}<div className="flip-hint">Click to flip back →</div><div className="source">{source}</div></div>
  </button></article>;
}
function ProofSkeleton({ proof }) {
  const steps = proof.split(/(?<=[.!?])\s+(?=[A-Z])/).filter(Boolean);
  return <ol className="proof-skeleton">{steps.map((step, index) => {
    const colon = step.indexOf(':');
    const idea = colon > 0 && colon < 55 ? step.slice(0, colon) : index === 0 ? 'Set up the argument' : 'Advance the argument';
    const how = colon > 0 && colon < 55 ? step.slice(colon + 1).trim() : step;
    return <li key={`${index}-${step}`}><span><b>Idea:</b> {idea}.</span><span><b>How:</b> {how}</span></li>;
  })}</ol>;
}
function PageNav({ title, items }) { return <aside className="bookmark-panel" aria-label={`${title} bookmarks`}><a className="home-link" href="#/">← All subjects</a><div className="bookmark-title">{title}</div><nav className="chapter-list">{items.map(item => <a className="chapter-bookmark" href={`#${item.id}`} key={item.id}><span className="bookmark-icon"/><span className="bookmark-copy"><span className="bookmark-name">{item.title}</span>{item.meta && <span className="bookmark-meta">{item.meta}</span>}</span></a>)}</nav></aside>; }
function Controls({ setForceFlipped }) { return <div className="controls"><button onClick={() => setForceFlipped(false)}>Show incomplete statements</button><button onClick={() => setForceFlipped(true)}>Show answers & proof skeletons</button><button onClick={() => setForceFlipped(null)}>Study mode</button></div>; }

function Landing() { return <main className="landing"><header className="page-header landing-header"><div className="page-kicker">Mathematics • Flip notes</div><h1>What are you studying?</h1><p className="sub">Choose a subject to open its theorem deck.</p></header><div className="subject-grid">
  <a className="subject-card" href="#/real-analysis"><span className="subject-number">01</span><div><h2>Real Analysis</h2><p>{cards.length} theorem flip cards, organised by chapter.</p></div><span className="subject-arrow">→</span></a>
  <a className="subject-card metric-subject" href="#/metric-spaces"><span className="subject-number">02</span><div><h2>Metric & Topological Spaces</h2><p>{metricCards.length} results with proof skeletons and a dependency map.</p></div><span className="subject-arrow">→</span></a>
  <article className="subject-card coming-soon"><span className="subject-number">03</span><div><h2>Hilbert Spaces</h2><p>Ready for the next section of the notes.</p></div><span className="soon-pill">Coming soon</span></article>
  </div></main>; }

function RealAnalysisDeck() {
  const [forceFlipped, setForceFlipped] = useState(null);
  const grouped = useMemo(() => cards.reduce((map, card) => { if (!map.has(card.topic)) map.set(card.topic, []); map.get(card.topic).push(card); return map; }, new Map()), []);
  const items = [...grouped].map(([title, group]) => ({ id: `real-${slugify(title)}`, title, meta: `${group.length} cards` }));
  return <div className="app-shell"><PageNav title="Real Analysis" items={items}/><main><header className="page-header"><div className="page-kicker">Study deck</div><h1>Real Analysis Theorem Flip Cards</h1><p className="sub">{cards.length} cards. Click a card to flip it.</p></header><Controls setForceFlipped={setForceFlipped}/>{[...grouped].map(([topic, group]) => <section className="chapter" id={`real-${slugify(topic)}`} key={topic}><header className="chapter-header"><div><div className="chapter-label">Topic</div><h2>{topic}</h2></div><span>{group.length} cards</span></header><div className="grid topic">{group.map(card => <Card title={card.title} front={card.front} back={card.back} source={card.source} forceFlipped={forceFlipped} frontLabel="Front" backLabel="Back" key={`${topic}-${card.title}`}/>)}</div></section>)}</main></div>;
}

function DependencyGraph() {
  const [activeNode, setActiveNode] = useState(null);
  const byId = new Map(metricCards.map(card => [card.id, card]));
  const shortTitle = id => byId.get(id)?.title.replace(/^(Proposition|Theorem|Corollary)\s+/, '') || id;
  const linkedIds = [...new Set(dependencies.flat())];
  const definitions = linkedIds.filter(id => byId.get(id)?.kind === 'definition');
  const results = linkedIds.filter(id => byId.get(id)?.kind !== 'definition');
  const definitionPositions = definitions.map((id, index) => ({
    id,
    x: [35, 50, 65][index % 3],
    y: [41, 50, 59][Math.floor(index / 3)],
  }));
  const resultPositions = results.map((id, index) => {
    const angle = -Math.PI / 2 + (index * Math.PI * 2) / results.length;
    return { id, x: 50 + 43 * Math.cos(angle), y: 50 + 43 * Math.sin(angle) };
  });
  const positions = new Map([...definitionPositions, ...resultPositions].map(item => [item.id, item]));
  return <section className="dependency" id="dependency-graph"><div className="section-intro"><div><div className="chapter-label">Big picture</div><h2>Result & definition graph</h2></div><p>Each arrow joins one individual definition, proposition, theorem, or corollary to a result that uses it. Select either end to jump to its card.</p></div>
    <div className="web-graph" role="img" aria-label="Definitions at the centre connected to theorem and proposition cards around them">
      <svg className="web-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <defs><marker id="web-arrow" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto"><path d="M0,0 L5,2.5 L0,5 z"/></marker><marker id="web-arrow-active" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto"><path d="M0,0 L5,2.5 L0,5 z"/></marker></defs>
        {dependencies.map(([from, to]) => { const a = positions.get(from); const b = positions.get(to); const connected = activeNode === from || activeNode === to; return a && b ? <line className={activeNode ? connected ? 'connected' : 'muted' : ''} x1={a.x} y1={a.y} x2={b.x} y2={b.y} markerEnd={connected ? 'url(#web-arrow-active)' : 'url(#web-arrow)'} key={`${from}-${to}`}/> : null; })}
      </svg>
      {[...definitionPositions, ...resultPositions].map(({ id, x, y }) => { const adjacent = dependencies.some(([from, to]) => (from === activeNode && to === id) || (to === activeNode && from === id)); return <a className={`web-node ${byId.get(id)?.kind} ${activeNode === id ? 'active' : adjacent ? 'adjacent' : activeNode ? 'muted' : ''}`} style={{ left: `${x}%`, top: `${y}%` }} href={`#${id}`} title={byId.get(id)?.title} onMouseEnter={() => setActiveNode(id)} onMouseLeave={() => setActiveNode(null)} onFocus={() => setActiveNode(id)} onBlur={() => setActiveNode(null)} key={id}>{shortTitle(id)}</a>; })}
      <div className="web-centre-label">Core definitions</div>
    </div>
    <div className="graph-legend"><span><i className="definition-dot"/>Definition</span><span><i/>Theorem / result</span></div>
  </section>;
}
function MetricDeck() {
  const [forceFlipped, setForceFlipped] = useState(null);
  const count = id => metricCards.filter(c => c.section === id).length;
  const nav = [{ id: 'prerequisites', title: 'Prerequisites' }, { id: 'dependency-graph', title: 'Dependency graph' }, ...metricSections.map(s => ({ ...s, meta: `${count(s.id)} cards` }))];
  return <div className="app-shell"><PageNav title="Metric Spaces" items={nav}/><main><header className="page-header"><div className="page-kicker">MAST30026 • Section 2</div><h1>Metric & Topological Spaces</h1><p className="sub">Fill in each theorem or definition, then flip for the completed statement and a step-by-step proof skeleton.</p></header>
    <section className="prerequisites" id="prerequisites"><div><div className="chapter-label">Before you begin</div><h2>Prerequisites</h2><p>Brief signposts for concepts used in this deck, ready to become links later.</p></div><div className="prereq-list">{prerequisites.map((item, i) => <span key={item}><b>{String(i + 1).padStart(2, '0')}</b>{item}</span>)}</div></section>
    <DependencyGraph/><Controls setForceFlipped={setForceFlipped}/>{metricSections.map(section => { const group = metricCards.filter(c => c.section === section.id); const definitionCount = group.filter(c => c.kind === 'definition').length; return <section className="chapter" id={section.id} key={section.id}><header className="chapter-header"><div><div className="chapter-label">Topic</div><h2>{section.title}</h2></div><span>{definitionCount} definitions · {group.length - definitionCount} results</span></header><div className="grid topic">{group.map(card => <Card id={card.id} title={card.title} front={card.cloze} back={card.kind === 'definition' ? <><div className="answer-label">Completed definition</div><MathText text={card.statement}/></> : <><div className="answer-label">Completed statement</div><MathText text={card.statement}/><div className="answer-label proof-label">Proof skeleton</div><ProofSkeleton proof={card.proof}/></>} source="notes.pdf • Metric and topological spaces" forceFlipped={forceFlipped} frontLabel={card.kind === 'definition' ? 'Complete the definition' : 'Complete the theorem'} backLabel={card.kind === 'definition' ? 'Definition' : 'Statement & proof skeleton'} kind={card.kind} key={card.id}/>)}</div></section>; })}</main></div>;
}

export default function App() {
  const metricAnchors = new Set(['#prerequisites', '#dependency-graph', ...metricSections.map(s => `#${s.id}`), ...metricCards.map(c => `#${c.id}`)]);
  const getRoute = () => window.location.hash.startsWith('#/metric-spaces') || metricAnchors.has(window.location.hash) ? 'metric' : window.location.hash.startsWith('#/real-analysis') || window.location.hash.startsWith('#real-') ? 'real' : 'home';
  const [route, setRoute] = useState(getRoute);
  useEffect(() => { const update = () => setRoute(getRoute()); window.addEventListener('hashchange', update); return () => window.removeEventListener('hashchange', update); }, []);
  return route === 'metric' ? <MetricDeck/> : route === 'real' ? <RealAnalysisDeck/> : <Landing/>;
}
