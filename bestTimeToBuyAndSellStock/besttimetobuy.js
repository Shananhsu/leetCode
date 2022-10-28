// let prices = [7, 6, 4, 3, 1];
// let prices = [7, 1, 5, 3, 6, 4];
let prices = [2, 4, 6, 3, 10, 1]

var maxProfit = function (prices) {

    let min = Math.min(...prices);
    let minIndex = prices.indexOf(min);
    let newPrices = prices;

    for (let i = 0; i < prices.length; ++i) {
        // console.log(prices.length - 1 === i);
        // console.log(i);
        let max = Math.max(...newPrices);
        let maxIndex = newPrices.indexOf(max);

        if (minIndex > maxIndex) {

            newPrices = newPrices.filter((item) => item !== max);
            // console.log(newPrices.length);
            max = Math.max(...newPrices);
            // console.log(max);

            if (newPrices.length === 0) {
                newPrices = prices
                newPrices = newPrices.filter((item) => item !== min);
                min = Math.min(...newPrices);
                minIndex = newPrices.indexOf(min);
                max = Math.max(...newPrices);
                return max - min;
            }

        } else {
            return max - min;
        }
    }
};

// var maxProfit = function (prices) {

//     let min = prices[0];

//     let profit = 0;

//     for (let i = 0; i < prices.length; ++i) {

//         console.log(`第${i + 1}次迴圈：${prices[i]}`);

//         if (prices[i] < min) {

//             console.log(prices[i] < min);

//             min = prices[i];

//             console.log(min);

//         } else if (prices[i] - min > profit) {

//             console.log(prices[i] - min > profit);

//             profit = prices[i] - min;
//         }

//     }

//     return profit

// };

// maxProfit(prices);
console.log(maxProfit(prices))