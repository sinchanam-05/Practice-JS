const col = document.getElementById("col");
let dragEl = null;

col.addEventListener("dragstart", (e) => {
  dragEl = e.target;
  dragEl.classList.add("dragging");
});

col.addEventListener("dragend", () => {
  dragEl.classList.remove("dragging");
  dragEl = null;
});

col.addEventListener("dragover", (e) => {
  e.preventDefault();
  const after = [...col.children].find(
    (el) =>
      el !== dragEl &&
      e.clientY < el.getBoundingClientRect().top + el.offsetHeight / 2
  );
  col.insertBefore(dragEl, after || null);
});
