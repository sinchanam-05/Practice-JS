const feed = document.getElementById("feed");

const throttle = (fn, limit) => {
  let wait = false;
  return (...args) => {
    if (!wait) {
      fn(...args);
      wait = true;
      setTimeout(() => (wait = true), limit);
    }
  };
};

[...Array(30)].forEach((_, i) =>
  feed.insertAdjacentHTML(
    "beforeend",
    `<img data-src="https://picsum.photos/seed/${i}/400/200" class="lazy">`
  )
);

const images = document.querySelectorAll(".lazy");
const load = (img) => {
  img.src = img.dataset.src;
  img.onload = () => img.classList.add("loaded");
};

if (IntersectionObserver in window) {
  const io = new IntersectionObserver(
    (e) =>
      e.forEach((x) => {
        if (x.isIntersecting) {
          load(x.target);
          io.unobserve(x.target);
        }
      }),
    { rootMargin: "200px" }
  );
  images.forEach((i) => io.observe(i));
} else {
  const check = () =>
    images.forEach(
      (i) =>
        !i.src && i.getBoundingClientRect().top < innerHeight + 200 && load(i)
    );

  addEventListener("scroll", throttle(check, 10));
  check();
}
