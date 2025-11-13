function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError("Argument must be an array"));
    }

    const results = [];
    let completed = 0;

    if (promises.length === 0) {
      resolve([]);
      return;
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = value;
          completed++;

          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
}

// Example for resolved
const p1 = Promise.resolve(10);
const p2 = new Promise((res) => setTimeout(() => res(20), 1000));
const p3 = Promise.resolve(30);

myPromiseAll([p1, p2, p3])
  .then((values) => console.log("Resolved:", values)) // [10, 20, 30]
  .catch((err) => console.error("Rejected:", err));

//Example for rejected
const p4 = Promise.resolve(10);
const p5 = Promise.reject("Error!");
const p6 = Promise.resolve(30);

myPromiseAll([p4, p5, p6])
  .then((values) => console.log(values))
  .catch((err) => console.error("Rejected:", err)); // "Rejected: Error!"
