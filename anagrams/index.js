function areAnagrams(str1, str2) {
  function cleanString(str) {
    let cleaned = "";
    for (let i = 0; i < str.length; i++) {
      let ch = str[i].toLowerCase();
      if ((ch >= 0 && ch <= 9) || (ch >= "a" && ch <= "z")) {
        cleaned += ch;
      }
    }

    let arr = cleaned.split("");
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
    return arr.join("");
  }
  return cleanString(str1) === cleanString(str2);
}

console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("Apple", "Pabble")); // false
