import { useState } from "react";

export default function Counter() {
  const [n, set] = useState(0);
  return (
    <button onClick={() => set(n + 1)} data-testid="btn">
      Clicked {n}
    </button>
  );
}
