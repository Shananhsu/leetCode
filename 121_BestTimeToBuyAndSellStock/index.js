const prices = [7, 1, 5, 3, 6, 4];
maxProfit(prices);

function maxProfit(prices) {
    let min = prices[0];
    let profit = 0;
    for (let i = 0; i < prices.length; ++i) {
        // console.log(`迴圈內容:${prices[i]}`);
        // console.log(`目前最小值:${min}`);
        if (prices[i] < min) {
            min = prices[i]
            // console.log(`最新最小值:${min}`);
        } else if (prices[i] - min > profit) {
            profit = prices[i] - min
        };
    }
    return profit
};