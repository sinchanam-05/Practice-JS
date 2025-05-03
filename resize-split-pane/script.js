const drag = document.getElementById("drag");
let down = false;

drag.addEventListener("mousedown", (e) => {
  down = true;
  document.body.style.cursor = "col-resize";
});
addEventListener("mouseup", () => {
  down = false;
  document.body.style.cursor = "";
});

addEventListener("mousemove", (e) => {
  if (!down) return;
  const pct = (e.clientX / innerWidth) * 100;
  document.getElementById("left").style.flex = `0 0 ${pct}%`;
});
