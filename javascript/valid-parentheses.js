// For this question we ask you to determine whether or not a string is valid parentheses. A string has valid parentheses if each bracket is closed and opened in the same order and has the same type. Parentheses has 3 types (), {} and []

// input: "()"
// output: true

// input: "(}"
// output: false

// input: "[()]"
// output: true

// () => parentheses
// {} => curly braces
// [] => brackets

// make a function, takes in a string, returns a boolean
// make a hash => { (: ")", [: "]", {: "}")}
// initialize an array => []
//   shoveling in characters from input string
// iterate through the input string
//   set a conditional: if opening parentheses (hasOwnProperty("key")), shovel it into the array
//     if not opening parentheses, set another conditional checking to see if it is the propery closing parenthese
//       if not proper closing parentheses, return false immediately
//       if it is proper closing parentheses, remove last element in array and continue on with the iteration of the input string
// check whether the array is empty. if empty, return true. if not empty, return false

// notes: stack!! no built-in stack data structure in javascript

function isValidParentheses(s) {
  const pairs = { "(": ")", "[": "]", "{": "}" };
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (pairs.hasOwnProperty(s[i])) {
      stack.push(s[i]);
    } else {
      if (s[i] === pairs[stack[stack.length - 1]]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(isValidParentheses("([][]{}){}{"));
