function getUser(id, cb) {
  setTimeout(() => cb(null, { id, name: "Minty" }), 300);
}

function getPosts(userId, cb) {
  setTimeout(() => cb(null, [`post by ${userId}`]), 300);
}

getUser(1, (err, user) => {
  if (err) return console.log(err);
  getPosts(user.id, (err2, posts) => {
    if (err2) return console.log(err2);
    console.log("Callback func----", user, posts);
  });
});

const delay = (v) => new Promise((r) => setTimeout(() => r(v), 300));

async function getUserAsync(id) {
  return delay({ id, name: "Minty" });
}

async function getPostsAsync(uid) {
  return delay([`post by ${uid}`]);
}

(async () => {
  try {
    const user = await getUserAsync(1);
    const posts = await getPostsAsync(user.id);
    console.log("Async/await --- ", user, posts);
  } catch {
    console.error(error);
  }
})();
