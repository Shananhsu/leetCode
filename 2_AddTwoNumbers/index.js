let l1 = [9, 9, 9, 9, 9, 9, 9];
let l2 = [9, 9, 9, 9];

var addTwoNumbers = function (l1, l2) {
    let l1Total = 0;
    let l2Total = 0;

    for (let i = 0; i < l1.length; ++i) {
        l1Total += l1[i] * Math.pow(10, i);
    }

    for (let i = 0; i < l2.length; ++i) {
        l2Total += l2[i] * Math.pow(10, i);
    }

    let total = l1Total + l2Total;

    let ans = total.toString().split('').reverse().join('');

    ans = ans.split('').map((item) => {
        return parseInt(item);
    });

    return ans;
}

addTwoNumbers(l1, l2);