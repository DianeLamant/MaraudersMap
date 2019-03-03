var game = new SweatyPromoClient.offline();

let vide = "./src/assets/img/vide.png";
let footprints1 = "./src/assets/img/human-shoes-footprints.png";
let footprints2 = "./src/assets/img/human-shoes-footprints-reverse.png";
let footprints = [footprints1, footprints2];
let player = "./src/assets/img/footprints.png";
let isItEnd = false;
let isItIA = false;
var min = 0;
var secs = 0;


function start() {
    game.start();
    game.play();
    document.getElementById('btnFormat').style.display = 'none';
    document.getElementById('displayZone').style.visibility = 'visible';
    document.getElementById('btnPause').style.visibility = 'visible';
    game.on('matrix', (matrix) => {
        timer();
        for (let x = 0; x < matrix.length; x++) {
            for (let y = 0; y < matrix[x].length; y++) {
                if (x == 7 && y == game.getPosition()) {
                    document.getElementById(x).getElementsByClassName(y)[0].src = player;
                } else if (matrix[x][y] == 1) {
                    let chooseImg = Math.floor(Math.random() * 2);
                    document.getElementById(x).getElementsByClassName(y)[0].src = footprints[chooseImg];
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
                    } else if (game.getPosition() == 0 && matrix[7][game.getPosition() + 1] == 0) {
                        rightButton();
                    } else if (game.getPosition() == 1 && matrix[7][game.getPosition() + 1] == 0) {
                        rightButton();
                    } else if (matrix[6][game.getPosition() + 1] == 1 && matrix[6][game.getPosition() - 1] == 1 && matrix[6][game.getPosition() == 1]) {
                        rightButton()
                    }
                }
            }
        }
        footPrintsWalking()
        playersWalking();
    })

    game.on('sweaty', () => {
        document.getElementById('game').style.display = 'none';
        document.getElementById('btnDirection').style.display = 'none';
        document.getElementById('gameOver').style.display = 'block';
        document.getElementById('gameOverMessage').style = '-webkit-animation : unzoom 0.5s';
        isItEnd = true;
        game.pause();
        console.log('perdu');
    })

    isItEnd = false;
}

function buttonJouer() {
    document.getElementById('btnDirection').style.display = 'flex';
    document.getElementById('btnGauche').style.visibility = 'visible';
    document.getElementById('btnDroite').style.visibility = 'visible';
    start();
    isItIA = false;
    document.onkeydown = function () {
        switch (window.event.keyCode) {
            case 37:
                game.left();
                break;
            case 39:
                game.right();
                break;
        }
    }
}

function buttonIA() {
    document.getElementById('btnDirection').style.display = 'flex';
    document.getElementById('btnGauche').style.visibility = 'hidden';
    document.getElementById('btnDroite').style.visibility = 'hidden';
    start();
    isItIA = true;
}

function leftButton() {
    game.left();
}

function rightButton() {
    game.right();
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
    document.getElementById("btnPause").style.visibility = "visible";
}

function timer() {
    document.getElementById('score').innerHTML = `Temps : ${min}m ${secs++}s`;
    if (secs == 60) {
        secs = 0;
        min++;
    }
    if (isItEnd == true) {
        clearInterval(timer);
        secs = 0;
        min = 0;
    }
}

function reset() {
    document.getElementById('btnFormat').style.display = 'block';
    document.getElementById('game').style.display = 'block';
    document.getElementById('displayZone').style.visibility = 'hidden';
    document.getElementById('gameOver').style.display = 'none';
    document.getElementById('score').innerHTML = `Maraudeur`;
}

function footPrintsWalking() {
    let whereFootPrints =  document.querySelectorAll("img[src='./src/assets/img/human-shoes-footprints.png']");
    let whereFootPrintsRev = document.querySelectorAll("img[src='./src/assets/img/human-shoes-footprints-reverse.png']");
    for (let theresFootPrints of whereFootPrints) {
        if (whereFootPrints.length > 1 && theresFootPrints.classList.contains("reverse")) {
            theresFootPrints.classList.remove("reverse");
        } else if (whereFootPrints.length > 1 && !theresFootPrints.classList.contains("reverse")) {
            theresFootPrints.classList.add("reverse");
        }
    }
    for (let theresFootPrintsRev of whereFootPrintsRev) {
        if (whereFootPrintsRev.length > 1 && theresFootPrintsRev.classList.contains("reverse")) {
            theresFootPrintsRev.classList.remove("reverse");
        } else if (whereFootPrintsRev.length > 1 && !theresFootPrintsRev.classList.contains("reverse")) {
            theresFootPrintsRev.classList.add("reverse");
        }
    }
}

function playersWalking() {
    let wherePlayer =  document.querySelector("img[src='./src/assets/img/footprints.png']");
    if (wherePlayer.classList.contains("reverse")) {
        wherePlayer.classList.remove("reverse");
    } else {
        wherePlayer.classList.add("reverse");
    }
}
