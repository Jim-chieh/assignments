/* Advanced Practice 4 */

/**
 * Advanced Practice 4: group by the same key and sum up the value
 */

function practice_4(input) {
  // your code here
  const valueAdd = input.reduce((accText, curText) => {
    const key = curText.key;
    if (accText[key] == null) accText[key] = 0;
    accText[key] += curText.value;
    return accText;
  }, {});
  return valueAdd;
}

const input4 = [
  { key: "a", value: 3 },
  { key: "b", value: 1 },
  { key: "c", value: 2 },
  { key: "a", value: 3 },
  { key: "c", value: 5 },
];
console.log(practice_4(input4)); // expected output: {'a': 6, 'b': 1, 'c': 7}
