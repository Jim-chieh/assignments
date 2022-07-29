/* Advanced Practice 3 */

/**
 * Advanced Practice 3: group by the same key and add the value to a list
 */
function practice_3(input) {
  // your code here
  const valueAdd = input.reduce((accText, curText) => {
    const key = curText.key;
    if (accText[key] == null) accText[key] = [];
    accText[key].push(curText["value"]);
    return accText;
  }, {});
  return valueAdd;
  // let aList = [];
  // let bList = [];
  // let cList = [];

  // for (let i = 0; i < input.length; i++) {
  //   if (input[i].key === "a") {
  //     aList.push(input[i].value);
  //   } else if (input[i].key === "b") {
  //     bList.push(input[i].value);
  //   } else if (input[i].key === "c") {
  //     cList.push(input[i].value);
  //   }
  // }
  // return { a: aList, b: bList, c: cList };
}

const input3 = [
  { key: "a", value: 3 },
  { key: "b", value: 1 },
  { key: "c", value: 2 },
  { key: "a", value: 3 },
  { key: "c", value: 5 },
];
console.log(practice_3(input3)); // expected output: {'a': [3,3], 'b': [1], 'c': [2,5]}
