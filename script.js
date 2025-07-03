let cell = document.querySelectorAll(".game-cell")
let result = document.getElementById("result")
let btn = document.getElementById('restart')
let currentPlayer = "X"

cell.forEach(box => {
    box.addEventListener('click', () => {
        if (box.innerText === "") {
            box.innerText = currentPlayer
        }
        if (checkWin()) {
            result.innerText = `Player ${currentPlayer} Wins`
        }
        else {
            currentPlayer = (currentPlayer === "X") ? "O" : "X"
            result.innerText = `${currentPlayer}'s Turn`
        }
    })
})

function checkWin() {
    let winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]
    return winConditions.some(combo => {
        const [a, b, c] = combo;
        return cell[a].innerText === currentPlayer &&
            cell[b].innerText === currentPlayer &&
            cell[c].innerText === currentPlayer;
    })
}


btn.addEventListener('click', () => {
    cell.forEach(box => box.innerText = "")
    currentPlayer = "X"
    result.innerText = `${currentPlayer}'s Turn`
})

