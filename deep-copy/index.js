function deepCopy(value) {
  if (value === null || typeof value != "object") {
    return value;
  }

  if (Array.isArray(value)) {
    const newArray = [];
    for (let i = 0; i < value.length; i++) {
      newArray[i] = deepCopy(value[i]);
    }
    return newArray;
  }

  const newObject = {};
  for (let key in value) {
    if (value.hasOwnProperty(key)) {
      newObject[key] = deepCopy(value[key]);
    }
  }
  return newObject;
}

//Example for testing
const original = {
  name: "Alice",
  scores: [10, 20, { math: 95 }],
  address: { city: "Paris", zip: 75000 },
};

const copy = deepCopy(original);

// Change the copy
copy.name = "Bob";
copy.scores[2].math = 100;
copy.address.city = "London";

console.log("Original:", original);
console.log("Copy:", copy);
