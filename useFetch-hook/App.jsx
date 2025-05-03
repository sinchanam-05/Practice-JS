const { useState, useEffect } = React;

function useFetch(url) {
  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ctrl = new AbortController();
    fetch(url, { signal: ctrl.signal })
      .then((r) => (r.ok ? r.json() : Promise.reject(r.statusText)))
      .then(setData)
      .catch((e) => e.name !== "AbortError" && setErr(e))
      .finally(() => setLoading(false));

    return () => ctrl.abort();
  }, [url]);

  return { data, err, loading };
}
function App() {
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/1"
  );
  if (loading) return <p>Loading…</p>;
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
