const rps = (p1, p2) => {
    switch (p1) {
        case 'rock':
            if (p2 === 'scissors') {
                return "Player 1 won!"
            } else if (p2 === 'paper') {
                return "Player 2 won!"
            } else {
                return "Draw!"
            }
        case 'paper':
            if (p2 === 'scissors') {
                return 'Player 2 won!'
            } else if (p2 === 'rock') {
                return 'Player 1 won!'
            } else {
                return 'Draw!'
            }
        case 'scissors':
            if (p2 === 'rock') {
                return 'Player 2 won!'
            } else if (p2 === 'paper') {
                return 'Player 1 won!'
            } else {
                return 'Draw!'
            }
    }
}


console.log(rps('rock', 'scissors'))