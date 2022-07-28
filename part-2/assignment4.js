function twoSum(nums, target) {
  let index = [];
  let newNums = nums.filter((num) => num < target);
  for (let i = 0; i < newNums.length; i++) {
    for (let x = i + 1; x < newNums.length; x++) {
      if (nums[i] + nums[x] === target) {
        index.push([i, x]);
      }
    }
  }
  return index;
}

console.log("Assignment4, Index Of TwoSum :", twoSum([1, 2, 3, 4, 6], 6));
