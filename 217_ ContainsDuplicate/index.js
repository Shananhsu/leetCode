// nums = [1, 2, 3, 1]

// var containsDuplicate = function (nums) {

//     let res = nums.filter((el, index) => {
//         // console.log(nums.el);
//         console.log(index);
//         return nums.indexOf(el) !== index
//     })
//     if (res.length === 0) {
//         return false;
//     } else {
//         return true;
//     }
// };
// containsDuplicate(nums);

nums = [1, 2, 3, 1];
containsDuplicate(nums);

function containsDuplicate(nums) {
    for (let i = 0; i < nums.length; ++i) {
        for (let j = i + 1; j < nums.length; ++j) {
            if (nums[i] === nums[j]) {
                return true
            }
        }
    }
    return false
}