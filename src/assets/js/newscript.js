// import Game from "sweaty-promo-client/src/offline";

var game = new SweatyPromoClient.offline()

let vide = "./src/assets/img/vide.png";
let caca = "./src/assets/img/caca.png";
let player = "./src/assets/img/pigeon.gif";
// let perdu = "./src/assets/img/sweaty.png"
let VALUE_PLAYER = 2;

// var case = document.getElementById($("#7"))$(".(game.getPosition())[0]");

function startButton() {
    game._init()
    game.on('matrix', (matrix) => {
        game._checkColision(matrix[7], [game.getPosition()]);
        if (game._checkColision(matrix[7], [game.getPosition()]) == true) {
            // document.getElementById(7).getElementsByClassName(game.getPosition())[0].src = perdu;
            document.getElementById('gameOverMessage').style.visibility = 'visible';
            document.getElementById('gameOverMessage').style = '-webkit-animation : unzoom 0.5s';
            end();
        }
        console.log(game._checkColision(matrix[7], [game.getPosition()]));
        matrix[7][game.getPosition()] = VALUE_PLAYER;
        for (let x = 0; x < matrix.length; x++) {
            for (let y = 0; y < matrix[x].length; y++) {
                if (matrix[x][y] == 1) {
                    document.getElementById(x).getElementsByClassName(y)[0].src = caca;
                } else if (matrix[x][y] == 0) {
                    document.getElementById(x).getElementsByClassName(y)[0].src = vide;
                } else if (matrix[7][game.getPosition()] == 2 && game._checkColision(matrix[7], [game.getPosition()]) == false) {
                    document.getElementById(7).getElementsByClassName(game.getPosition())[0].src = player;
                }
            }
        }
    })
}

function end() {
    document.getElementById('game').style.display = 'none'
    document.getElementById('gameOver').style.display = 'block'
}

function Reset() {
    startButton()
    document.getElementById('game').style.display = 'block'
    document.getElementById('gameOver').style.display = 'none'
}


function leftButton() {
    game.left()
    document.querySelector("img[src='./src/assets/img/pigeon.gif']").style.transform = "scaleX(-1)";
}

function rightButton() {
    game.right()
    document.querySelector("img[src='./src/assets/img/pigeon.gif']").style.transform = "scaleX(1)";

}