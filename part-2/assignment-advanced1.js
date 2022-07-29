/* Advanced Practice 1 */

/**
 * Advanced Practice 1: count the occurence of characters in the list
 */

// function practice_1(input) {
//   // your code here
//   let aCounter = 0;
//   let bCounter = 0;
//   let cCounter = 0;
//   let total = {};

//   input1.forEach((input) => {
//     if (input === "a") {
//       aCounter += 1;
//     } else if (input === "b") {
//       bCounter += 1;
//     } else if (input === "c") {
//       cCounter += 1;
//     }
//   });
//   total = { a: aCounter, b: bCounter, c: cCounter };
//   return total;

// }

function practice_1(input) {
  // your code here
  const total = input.reduce((accText, curText) => {
    if (accText[curText] == null) accText[curText] = 0;
    accText[curText] += 1;
    return accText;
  }, {});
  return total;
}

const input1 = ["a", "b", "c", "a", "c", "a"];
console.log(practice_1(input1)); // expected output: {'a':3, 'b':1, 'c':2}
