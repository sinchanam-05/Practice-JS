const { useState, useMemo } = React;

const data = Array.from({ length: 10000 }, (_, i) => `Item #${i}`);

// expensive filter on purpose
const slowFilter = (q) =>
  data.filter((d) => d.toLowerCase().includes(q.toLowerCase()));

function List({ smart }) {
  const [query, setQuery] = useState("");

  const items = useMemo(
    () => (smart ? slowFilter(query) : slowFilter(query)),
    [query, smart]
  );

  return (
    <>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={smart ? "Fast search…" : "Slow search…"}
      />
      <p>
        {items.length} hits (smart = {String(smart)})
      </p>
      <ul>
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </>
  );
}

function App() {
  const [fast, setFast] = useState(false);
  return (
    <>
      <button onClick={() => setFast((f) => !f)}>
        Switch to {fast ? "Slow" : "Fast"}
      </button>
      <List smart={fast} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
