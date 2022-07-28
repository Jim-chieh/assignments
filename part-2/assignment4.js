function twoSum(nums, target) {
  let index = [];
  for (let i = 0; i < newNums.length; i++) {
    for (let x = i + 1; x < newNums.length; x++) {
      if (nums[i] + nums[x] === target) {
        index.push([i, x]);
      }
    }
  }
  return index;
}

console.log(twoSum([2, 7, 11, 15], 9));
