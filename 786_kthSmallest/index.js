const arr = [1, 2, 3, 5];
const k = 3;

var kthSmallestPrimeFraction = function (arr, k) {
    let sortArr = arr.sort((a, b) => b - a);
    console.log(sortArr);
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        console.log(element);
    }
};

kthSmallestPrimeFraction(arr, k);