nums = [1, 2, 3, 1]

var containsDuplicate = function (nums) {

    let res = nums.filter((el, index) => {
        // console.log(nums.el);
        console.log(index);
        return nums.indexOf(el) !== index
    })
    if (res.length === 0) {
        return false;
    } else {
        return true;
    }
};
containsDuplicate(nums);