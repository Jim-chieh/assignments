/* Advanced Practice 4 */

/**
 * Advanced Practice 4: group by the same key and sum up the value
 */

function practice_4(input) {
  // your code here
  let aValue = 0;
  let bValue = 0;
  let cValue = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i].key === "a") {
      aValue += input[i].value;
    } else if (input[i].key === "b") {
      bValue += input[i].value;
    } else if (input[i].key === "c") {
      cValue += input[i].value;
    }
  }
  return { a: aValue, b: bValue, c: cValue };
}

const input4 = [
  { key: "a", value: 3 },
  { key: "b", value: 1 },
  { key: "c", value: 2 },
  { key: "a", value: 3 },
  { key: "c", value: 5 },
];
console.log(practice_4(input4)); // expected output: {'a': 6, 'b': 1, 'c': 7}
