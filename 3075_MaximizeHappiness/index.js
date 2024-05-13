const happiness = [1, 2, 3]
const k = 2

var maximumHappinessSum = function (happiness, k) {
    let sum = 0;
    happiness.sort((a, b) => b - a);
    for (let i = 0; i < k; i++) {
        if (i < happiness.length) {
            sum += Math.max(0, happiness[i] - i);
        }
    }
    return sum;
};

maximumHappinessSum(happiness, k)