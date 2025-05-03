console.log("sync 1");

setTimeout(() => console.log("setTimeout 0"), 0);
Promise.resolve().then(() => console.log("microtask 1"));

queueMicrotask(() => console.log("microtask 2"));
requestAnimationFrame(() => console.log("rAF"));

console.log("sync 2");
