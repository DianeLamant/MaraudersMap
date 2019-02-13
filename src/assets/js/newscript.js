var game = new SweatyPromoClient.offline()

let vide = "./src/assets/img/vide.png";
let caca = "./src/assets/img/caca.png";
let player = "./src/assets/img/pigeon.gif";
let isItEnd = false;
let isItIA = false;
var min = 0;
var secs = 0;


function start() {
    game.start();
    game.play();
    document.getElementById('btnFormat').style.display = 'none'
    document.getElementById('displayZone').style.visibility = 'visible'
    document.getElementById('btnPause').style.visibility = 'visible'
    game.on('matrix', (matrix) => {
        timer()
        for (let x = 0; x < matrix.length; x++) {
            for (let y = 0; y < matrix[x].length; y++) {
                if (x == 7 && y == game.getPosition()) {
                    document.getElementById(x).getElementsByClassName(y)[0].src = player;
                } else if (matrix[x][y] == 1) {
                    document.getElementById(x).getElementsByClassName(y)[0].src = caca;
                } else if (matrix[x][y] == 0) {
                    document.getElementById(x).getElementsByClassName(y)[0].src = vide;
                }
                if (isItIA == true) {
                    if (matrix[7][game.getPosition()] == 1 && game.getPosition() == 0) {
                        rightButton();
                    } else if (matrix[7][game.getPosition()] == 1 && matrix[7][game.getPosition() - 1] == 0) {
                        leftButton();
                    } else if (matrix[7][game.getPosition()] == 1 && matrix[7][game.getPosition() - 1] == 1) {
                        rightButton();
                    } else if (matrix[7][game.getPosition()] == 1 && matrix[7][game.getPosition() + 1] == 1) {
                        leftButton();
                    } else if (matrix[7][game.getPosition()] == 1 && matrix[7][game.getPosition() + 1] == 0) {
                        leftButton();
                    }
                }
            }
        }

        game.on('sweaty', () => {
            document.getElementById('game').style.display = 'none'
            document.getElementById('btnDirection').style.display = 'none'
            document.getElementById('gameOver').style.display = 'block'
            document.getElementById('gameOverMessage').style = '-webkit-animation : unzoom 0.5s';
            isItEnd = true;
            game.pause()
            console.log('perdu')
        })
        isItEnd = false
    })
}

function buttonJouer() {
    document.getElementById('btnDirection').style.display = 'flex';
    document.getElementById('btnGauche').style.visibility = 'visible'
    document.getElementById('btnDroite').style.visibility = 'visible'
    start();
    isItIA = false;
    document.onkeydown = function () {
        switch (window.event.keyCode) {
            case 37:
                game.left()
                break;
            case 39:
                game.right()
                break;
        }
    }
}

function buttonIA() {
    document.getElementById('btnDirection').style.display = 'flex'
    document.getElementById('btnGauche').style.visibility = 'hidden'
    document.getElementById('btnDroite').style.visibility = 'hidden'
    start();
    isItIA = true;
}

function leftButton() {
    game.left()
    // document.querySelector("img[src='./src/assets/img/pigeon.gif']").style.transform = "scaleX(-1)";
}

function rightButton() {
    game.right()
    // document.querySelector("img[src='./src/assets/img/pigeon.gif']").style.transform = "scaleX(1)";
}

function pause() {
    game.pause();
    document.getElementById("divPause").removeChild(document.getElementById("btnPause"));
    document.getElementById("divPause").innerHTML = `<button id="btnPlay" onclick="play()">Continuer</button>`;
}

function play() {
    game.play();
    document.getElementById("divPause").removeChild(document.getElementById("btnPlay"));
    document.getElementById("divPause").innerHTML = `<button id="btnPause" onclick="pause()">Pause</button>`;
    document.getElementById("btnPause").style.visibility = "visible"
}

function timer() {
    document.getElementById('score').innerHTML = `Temps : ${min}m ${secs++}s`;
    if (secs == 60) {
        secs = 0
        min++;
    }
    if (isItEnd == true) {
        clearInterval(timer)
        secs = 0;
        min = 0;
    }
}

function reset() {
    document.getElementById('btnFormat').style.display = 'block'
    document.getElementById('game').style.display = 'block'
    document.getElementById('displayZone').style.visibility = 'hidden'
    document.getElementById('gameOver').style.display = 'none'
    document.getElementById('score').innerHTML = `La promo en sueur`
}