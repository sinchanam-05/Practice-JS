function findLargest(arr) {
  let largest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

const largestNumber = findLargest([2, 5, 9, 4]);
console.log(largestNumber);
