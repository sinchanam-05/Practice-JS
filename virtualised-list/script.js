// const total = 10000,
//   rowH = 30,
//   buffer = 10;

// const vp = document.getElementById("viewport");
// const list = document.getElementById("list");

// document.getElementById("spacer").style.height = total * rowH + "px";

// const render = () => {
//   const start = Math.floor(vp.scrollTop / rowH);
//   const end = Math.min(
//     total,
//     start + Math.ceil(vp.clientHeight / rowH) + buffer
//   );
//   list.style.transform = `translateY(${start * rowH}px)`;
//   list.innerHTML = Array.from(
//     { length: end - start },
//     (_, i) => `<li>Row ${start + i}</li>`
//   ).join("");
// };

// vp.addEventListener("scroll", render);
// render();

const total = 10000,
  rowH = 30,
  buffer = 10;

const vp = document.getElementById("viewport");
const list = document.getElementById("list");

document.getElementById("spacer").style.height = total * rowH + "px";

const render = () => {
  const start = Math.floor(vp.scrollTop / rowH);
  const end = Math.min(
    total,
    start + Math.ceil(vp.clientHeight / rowH) + buffer
  );

  list.style.transform = `translateY(${start * rowH}px)`;
  list.innerHTML = Array.from(
    { length: end - start },
    (_, i) => `<li>Row ${start + i}</li>`
  ).join("");
};

vp.addEventListener("scroll", render);
render();
