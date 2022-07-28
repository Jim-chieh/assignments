/* Advanced Practice 1 */

/**
 * Advanced Practice 1: count the occurence of characters in the list
 */

function practice_1(input) {
  // your code here
  let aCounter = 0;
  let bCounter = 0;
  let cCounter = 0;
  let total = {};

  input1.forEach((input) => {
    if (input === "a") {
      aCounter += 1;
    } else if (input === "b") {
      bCounter += 1;
    } else if (input === "c") {
      cCounter += 1;
    }
  });
  total = { a: aCounter, b: bCounter, c: cCounter };
  return total;

  /* 大神解法
    return {
      a:input.filter(x=> x === "a").length,
      b:input.filter(x=> x === "b").length,
      c:input.filter(x=> x === "c").length,
    }
  */
}

const input1 = ["a", "b", "c", "a", "c", "a"];
console.log(practice_1(input1)); // expected output: {'a':3, 'b':1, 'c':2}
