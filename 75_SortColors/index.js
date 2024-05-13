const num = [2, 0, 2, 1, 1, 0];

var sortColors = function (num) {
    let len = num.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (num[j] > num[j + 1]) {
                let temp = num[j];
                num[j] = num[j + 1];
                num[j + 1] = temp;
            }
        }
    }
    console.log(num);
    return num;
};

sortColors(num);