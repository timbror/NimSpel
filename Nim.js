let userInput = document.getElementById('userInput');
let player = document.getElementById('player');
let numberOfSticks = document.getElementById('noOfSticks');
let sticksLeft = document.getElementById('sticksLeft');

let totalSticks = 21;
let currentPlayer = "1";
sticksLeft.innerHTML = "Total sticks: " + totalSticks;

function sticks() { //Sticks börjar som tom sträng, loopen plussar på med en '|' beroende på hur stor totalSticks är.
    let sticks = '';
    for (let i = 0; i < totalSticks; i++) {
        sticks += '|';
    }
    numberOfSticks.innerHTML = sticks;
}
sticks(); //Kalla på funktionen så att stickor visas.

function removeSticks() { //Om användarens val av stickor uppfyller kraven, ta bort x antal stickor och skriv ut hur många stickor som är kvar.
    
    if (userInput.value > 0 && userInput.value <= totalSticks) {
        totalSticks -= userInput.value;
        sticksLeft.innerHTML = totalSticks + " Sticks left!";
    }
}

function changePlayer() {  //Byt spelare och skriver ut vinnaren, truthy/falsy.
        if (currentPlayer == "1") {
            currentPlayer = "2";
        }
        else if (currentPlayer == "2") {
            currentPlayer = "1";
        }
        player.innerHTML = "Player " + currentPlayer;
        
        while(totalSticks == 0) {
            player.innerHTML = "Player " + currentPlayer + " won, congratulations!";
            break;
        }
}

document.getElementById('button').addEventListener('click', function (e) {
    removeSticks();
    sticks();
    changePlayer();
});