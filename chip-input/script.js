const data = [
  "apple",
  "banana",
  "cherry",
  "date",
  "elderberry",
  "fig",
  "grape",
];
const box = document.getElementById("box");
const inp = document.getElementById("inp");
const ul = document.getElementById("suggest");

const renderList = (arr) => {
  ul.innerHTML = arr.map((x) => `<li>${x}</li>`).join("");
};

inp.addEventListener("input", () => {
  const q = inp.value.toLowerCase();
  if (!q) return (ul.innerHTML = "");
  renderList(data.filter((x) => x.startsWith(q) && !chips().includes(x)));
});

ul.addEventListener("click", (e) => {
  if (e.target.tagName !== "LI") return;
  addChip(e.target.textContent);
  inp.value = "";
  ul.innerHTML = "";
});

box.addEventListener("click", (e) => {
  if (e.target.tagName === "SPAN") e.target.parentNode.remove();
});

const addChip = (txt) => {
  const chip = document.createElement("div");
  chip.className = "chip";
  chip.innerHTML = `${txt} <span>&times;</span>`;
  box.insertBefore(chip, inp);
};

const chips = () =>
  [...document.querySelectorAll(".chip")].map((c) => c.textContent.trim());
