import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./Counter.jsx"; // the component you already wrote

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>
);
