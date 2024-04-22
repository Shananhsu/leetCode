//https://leetcode.com/problems/median-of-two-sorted-arrays/description/

const num1 = [1, 2];
const num2 = [3, 4];

var findMedianSortedArrays = function (num1, num2) {
    const fitArray = num1.concat(num2).sort((a, b) => a - b);
    if (fitArray.length % 2 === 0) {
        const middle = fitArray.length / 2;
        return (fitArray[middle - 1] + fitArray[middle]) / 2;
    }
    else {
        const middle = Math.floor(fitArray.length / 2);
        return fitArray[middle];
    }
};

findMedianSortedArrays(num1, num2);