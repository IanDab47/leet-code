var twoSum = function (nums, target) {
  // Grab 1st num

  // Find Difference of target and num

  // Check if difference exists in "numms"
  // TRUE: Locate indeces
  // False: Move to next number

  // // Initial Solution
  // let count = 0;
  // let indeces = [];

  // while (count < nums.length && indeces.length < 1) {
  //   const difference = target - nums[count];

  //   if (nums.slice(count + 1).includes(difference)) {
  //     indeces = [count, nums.slice(count + 1).indexOf(difference) + count + 1];
  //   } else {
  //     count++;
  //   }
  // }

  // return indeces;

  // Best Solution
  let mp = new Map();

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];

    if (mp.has(diff)) {
      return [i, mp.get(diff)];
    }

    mp.set(nums[i], i);
  }
};

twoSum([2, 7, 11, 15], 9);
twoSum([3, 2, 4], 6);
twoSum([3, 3], 6);
