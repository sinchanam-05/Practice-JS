const btn = document.getElementById("load");
const out = document.getElementById("out");

btn.onclick = async () => {
  btn.disabled = true;
  const { add, mul } = await import("./utils.js");
  out.textContent = `2 + 3 = ${add(2, 3)} , 4 * 5 = ${mul(4, 5)}`;
};
