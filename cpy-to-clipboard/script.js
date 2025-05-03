window.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".copy");
  const inp = document.getElementById("text");
  const msg = document.getElementById("msg");

  btn.onclick = async () => {
    try {
      await copyText(text);
      flash("Copied!");
    } catch (error) {
      flash(`Couldn't copy`, true);
    }
  };

  async function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text);
    }

    inp.select();
    showHelper();

    return Promise.reject(new Error("Clipboard API not supported"));
  }

  function flash(text, error = false) {
    msg.textContent = text;
    msg.style.color = error ? "red" : "green";
    setTimeout(() => (msg.textContent = ""), 1500);
  }

  function showHelper() {
    const div = document.createElement("div");
    div.className = "helper";
    div.textContent = "Press Ctrl/⌘ + C to copy";
    document.body.appendChild(div);
    setTimeout(() => div.remove(), 2000);
  }
});
