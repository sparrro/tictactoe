const fieldBoxes = document.querySelectorAll('.subfield');
const gameHeader = document.querySelector('h1');
const restart = document.querySelector('button');
const gameState = {
    '1': '',
    '2': '',
    '3': '',
    '4': '',
    '5': '',
    '6': '',
    '7': '',
    '8': '',
    '9': ''
};
let turn = 'x';
let gameInProgress = true;

function makeMark(box) {
    box.innerText = turn;
    gameState[box.id] = turn;
    if (turn === 'x') {
        turn = 'o'
    } else (turn = 'x')
};

function checkVictory(box) {
    if (gameState[1] != '' && gameState[1] === gameState[2] && gameState[1] === gameState[3] ||
        gameState[4] != '' && gameState[4] === gameState[5] && gameState[4] === gameState[6] ||
        gameState[7] != '' && gameState[7] === gameState[8] && gameState[7] === gameState[9] ||
        gameState[1] != '' && gameState[1] === gameState[4] && gameState[1] === gameState[7] ||
        gameState[2] != '' && gameState[2] === gameState[5] && gameState[2] === gameState[8] ||
        gameState[3] != '' && gameState[3] === gameState[6] && gameState[3] === gameState[9] ||
        gameState[1] != '' && gameState[1] === gameState[5] && gameState[1] === gameState[9] ||
        gameState[3] != '' && gameState[3] === gameState[5] && gameState[3] === gameState[7]) {
        proclaimVictor(box)
    }
};

function checkForDraw() {
    for (let box in gameState) {
        if (gameState[box] == '') {
            return false
        }
    }
    return true
}

function proclaimVictor(victor) {
    gameHeader.innerText = `${victor.toUpperCase()} vinner!`;
    gameInProgress = false
}

fieldBoxes.forEach(box => 
    box.addEventListener('click', () => {
        if (gameInProgress && box.innerHTML === '') {
            makeMark(box);
            gameHeader.innerText = `${turn.toUpperCase()}s tur`
            checkVictory(gameState[box.id])
            if (checkForDraw()) {
                gameHeader.innerText = 'Oavgjort'
                gameInProgress = false
            }
        }
    })
)

restart.addEventListener('click', () => {
    location.reload()
})