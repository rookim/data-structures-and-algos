// Given two strings, determine if they are isomorphic. Two strings are "isomorphic" if each unique character from the first string can be replaced to match the second string, without changing the ordering of the characters.

// input: "egg" and "all"
// output: true

// input: "wow" and "aaa"
// output: false

// 3 main scenarios: words don't have the same length, same letter of a word maps to multiple letters of second word, same letter of second word maps to multiple letters of first word
// first check to make sure strings are same length. immediately return false if not
// loop through both words
//   use a hash to keep track of of which letter of str1 maps to which letter of str2
//   use an if-else statement to see whether a letter already exists in the map
//   if it exists, and it does not equal to the value, return false
//   if it doesn't exist, check to see if the letter of the second word exists (set). if it exists, return false immediately
//   create connection between letter of first word and letter of second word (set)
//      use set because no standard method available to match key to value. can match value to key using bracket notation

function isIsomorphic(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let mapHash = {};
  let mapSet = new Set();
  for (let i = 0; i < str1.length; i++) {
    let key = str1[i];
    if (mapHash.hasOwnProperty(key)) {
      if (mapHash[key] !== str2[i]) {
        return false;
      }
    } else {
      if (mapSet.has(str2[i])) {
        return false;
      }
      mapHash[str1[i]] = str2[i];
      mapSet.add(str2[i]);
    }
  }
  return true;
}

console.log(isIsomorphic("To be or not to be.", "U sucs ist oso suc?"));
