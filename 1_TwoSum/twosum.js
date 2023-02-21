// ---------暴力破解---------
// let arr = [2, 7, 11, 15];
// let ans = 9;

// var twoSum = function () {

//     for (let i = 0; i < arr.length; ++i) {
//         for (let j = i + 1; j < arr.length; ++j) {
//             if (arr[i] + arr[j] === ans) {
//                 return console.log(i, j)
//             }
//         }
//     }
// }

// twoSum();
// ---------暴力破解---------


// ---------new Map()---------
let nums = [3, 3];
let target = 6;

var twoSum = function (nums, target) {
    const mymap = new Map();
    for (let i = 0; i < nums.length; ++i) {
        let arrDetail = nums[i];
        let subtraction = target - arrDetail;
        if (mymap.has(subtraction)) {
            return [mymap.get(subtraction) , i]
        }
        mymap.set(arrDetail, i);
    }
}
console.log(twoSum(nums, target))

// ---------new Map()---------


