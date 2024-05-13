const nums = [-10, 8, 6, 7, -2, -3]
var findMaxK = function (nums) {
    let ans = -1;
    nums.sort((a, b) => b - a);
    for (let i = 0; i < nums.length; i++) {
        if (nums.includes(-nums[i])) {
            ans = Math.max(ans, nums[i]);
        }
    }
    return ans;
};
findMaxK(nums);