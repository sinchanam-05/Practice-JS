document.querySelectorAll(".accordion").forEach((header) => {
  header.addEventListener("click", () => {
    const open = document.querySelector('h2[aria-expanded="true"]');
    if (open && open !== header) toggle(open); // close previous
    toggle(header); // toggle current
  });
});

function toggle(header) {
  const panel = header.nextElementSibling;
  const expanded = header.getAttribute("aria-expanded") === "true";
  header.setAttribute("aria-expanded", !expanded);
  panel.style.maxHeight = expanded ? "0" : panel.scrollHeight + "px";
}
