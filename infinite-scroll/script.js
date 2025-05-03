const chat = document.getElementById("chat");
let page = 0;

const fakeFetch = (p) =>
  new Promise((res) =>
    setTimeout(
      () => res(Array.from({ length: 15 }, (_, i) => `Message #${p * 15 + i}`)),
      500
    )
  );

const prepend = (items) => {
  const pos = chat.scrollHeight - chat.scrollTop;
  const frag = document.createDocumentFragment();
  items.forEach((txt) => {
    const div = document.createElement("div");
    div.className = "msg";
    div.textContent = txt;
    frag.prepend(div);
  });
  chat.prepend(frag);
  chat.scrollTop = chat.scrollHeight - pos;
};

const loadOlder = async () => {
  loader.textContent = "Loading…";
  const msgs = await fakeFetch(++page);
  prepend(msgs);
  loader.textContent = "↑ scroll for more";
};

const loader = document.createElement("div");
loader.className = "loading";
loader.textContent = "↑ scroll for more";
chat.prepend(loader);

const io = new IntersectionObserver(([e]) => e.isIntersecting && loadOlder(), {
  root: chat,
  threshold: 0,
});
io.observe(loader);

loadOlder();
