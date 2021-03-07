const { competitions, results, getTournamentWinner } = require('./tournament')

test('Should return cheetah as the winnner', () => {
    const winner = getTournamentWinner(competitions, results)
    expect(winner).toBe("cheetah")
})

test('Should throw an error when one of the inputs is empty', () => {
    function returnError() {
        getTournamentWinner([], [])
    }
    expect(returnError).toThrowError(new Error("Input cannot be empty"))
})

test('Should throw an error when one of the inputs is invalid', () => {
    function returnError() {
        getTournamentWinner([], results)
    }
    expect(returnError).toThrowError(new Error("Invalid data input"))
})