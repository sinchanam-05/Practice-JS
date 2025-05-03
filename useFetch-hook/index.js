// index.js
import vite from "vite";

// ⚡ Kick off the Vite dev server when you run `npm run dev`
if (process.env.NODE_ENV !== "production") {
  vite.createServer().then((server) => server.listen());
}

// 👇 Put your app logic below
console.log("🚀  App started");
