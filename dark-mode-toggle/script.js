const btn = document.getElementById("toggle");
const mode = localStorage.getItem("mode") || "light";

document.body.classList.toggle("dark", mode === "dark");

btn.onclick = () => {
  const dark = document.body.classList.toggle("dark");
  localStorage.setItem("mode", dark ? "dark" : "light");
};
