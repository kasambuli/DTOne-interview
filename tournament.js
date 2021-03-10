const competitions = [
    ["puma", "cheetah"],
    ["cheetah", "Lion"],
    ["puma", "Lion"],
    ["cheetah", "Lion"]
]
const results = [1, 1, 0, 1]

function getTournamentWinner(competitions, results) {
    if (competitions.length !== results.length) {
        throw ("Invalid data input")
    }
    if (!competitions.length || !results.length) {
        throw new Error("Input cannot be empty")
    }
    let winnersArray = [];
    let count = 0;
    let winner;
    let counts = {};

    results.map((item, index) => {
        item == 0 ? winnersArray.push(competitions[index][1]) : winnersArray.push(competitions[index][0])
    })
    for (let i of winnersArray) {
        counts[i] == null ? counts[i] = 1 : counts[i]++
        counts[i] > count ? (winner = i, count = counts[i]) : winner = i
    }
    // console.log(winner)
    return winner;
}
//invoke the function
getTournamentWinner(competitions, results)
module.exports = { competitions, results, getTournamentWinner }




