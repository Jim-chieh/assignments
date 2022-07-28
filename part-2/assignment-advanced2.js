/* Advanced Practice 2 */

/**
 * Advanced Practice 2: mapping character to number
 */

function practice_2(input, mapping) {
  // your code here
  let newInput = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "a") {
      newInput.push(mapping.a);
    } else if (input[i] === "b") {
      newInput.push(mapping.b);
    } else if (input[i] === "c") {
      newInput.push(mapping.c);
    }
  }
  return newInput;
}

const arr = ["a", "b", "c", "a", "b"];
const mapping = {
  a: 1,
  b: 2,
  c: 3,
};
console.log(practice_2(arr, mapping)); // expected output: [1, 2, 3, 1, 2]
