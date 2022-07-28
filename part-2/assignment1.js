function max(numbers) {
  let maximum = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maximum) {
      maximum = numbers[i];
    }
  }
  return maximum;
}

console.log("Assiment1, Find the maximum: ", max([1, 2, 3, 4, 5]));
console.log("Assiment1, Find the maximum: ", max([1, 2, 9, 55, 20, 78]));
