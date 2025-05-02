const q = document.getElementById("q");
const results = document.getElementById("results");
const data = ["Apple", "Banana", "Mango", "Pineapple"];

const debounce = (fn, delay) => {
  let time;
  return (...args) => {
    clearTimeout(time);
    time = setTimeout(() => fn(...args), delay);
  };
};

q.addEventListener(
  "input",
  debounce(() => {
    const value = q.value.toLowerCase();
    results.innerHTML = value
      ? data
          .filter((x) => x.toLowerCase().includes(value))
          .map((x) => `<li>${x}</li>`)
          .join("")
      : "";
  }, 300)
);
