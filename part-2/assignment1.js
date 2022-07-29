function max(numbers) {
  let maximum;
  numbers.reduce((accNum, curNum) => {
    if (curNum > accNum) maximum = curNum;
    return maximum;
  }, 0);
  //   let maximum = numbers[0];
  //   for (let i = 0; i < numbers.length; i++) {
  //     if (numbers[i] > maximum) {
  //       maximum = numbers[i];
  //     }
  //   }
  //   return maximum;
  return maximum;
}

console.log(max([1, 2, 4, 5]));
console.log(max([5, 2, 7, 1, 6]));
