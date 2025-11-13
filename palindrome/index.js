function isPalindrome(str) {
  let cleaned = "";

  for (i = 0; i < str.length; i++) {
    let ch = str[i].toLowerCase();
    if ((ch >= "a" && ch <= "z") || (ch >= "0" && ch <= "9")) {
      cleaned += ch;
    }
  }

  let left = 0;
  let right = cleaned.length - 1;

  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

const palindrome = isPalindrome("A man, a plan, a canal: Panama");
console.log(palindrome);
