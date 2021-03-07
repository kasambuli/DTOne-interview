const { prices, k, getMaxProfit } = require('./profit')

test('should return max profit as 93', () => {
    const profit = getMaxProfit(prices, k)
    expect(profit).toBe(93)
})

test('Should throw an error when the prices array is empty', () => {
    function returnError() {
        getMaxProfit([], k)
    }
    expect(returnError).toThrowError(new Error("Input cannot be empty"))
})