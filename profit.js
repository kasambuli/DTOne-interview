const prices = [5, 11, 3, 50, 60, 90]
const k = 2

function getMaxProfit(prices, k) {
    let pricesArrayLength = prices.length
    let currentProfit = [];
    let previousProfit = []
    let rangeOfK = []
    let evenProfits = []
    let oddProfits = []
    let maxThisFar = -Infinity

    for (let i = 0; i <= k; i++) {
        rangeOfK.push(i)
    }
    rangeOfK.shift()

    if (pricesArrayLength == 0) {
        throw new Error("Input cannot be empty")
    }

    for (let i = 0; i < pricesArrayLength; i++) {
        evenProfits.push(0)
        oddProfits.push(0)
    }

    for (let j = 0; j <= rangeOfK.length; j++) {
        if (rangeOfK[j] % 2 == 1) {
            currentProfit = oddProfits
            previousProfit = evenProfits
        }
        else {
            currentProfit = evenProfits
            previousProfit = oddProfits
        }
        for (let l = 1; l < pricesArrayLength; l++) {
            maxThisFar = Math.max(maxThisFar, previousProfit[l - 1] - prices[l - 1])
            currentProfit[l] = Math.max(currentProfit[l - 1], maxThisFar + prices[l])
        }
    }
    return k % 2 == 0 ? evenProfits[evenProfits.length - 1] : oddProfits[oddProfits.length - 1]
}
module.exports = { prices, k, getMaxProfit }

