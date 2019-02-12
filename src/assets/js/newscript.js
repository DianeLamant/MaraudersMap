var game = new SweatyPromoClient.offline()

let vide = "./src/assets/img/vide.png";
let caca = "./src/assets/img/caca.png";
let player = "./src/assets/img/pigeon.gif";
let isItEnd = false;
let isItIA = false;


function start() {
    game = new SweatyPromoClient.offline()
    game.start();
    game.play();
    timer()

    document.getElementById('btnFormat').style.display = 'none'
    document.getElementById('displayZone').style.visibility = 'visible'
    game.on('matrix', (matrix) => {
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
                    if (matrix[6][game.getPosition()] == 1 && game.getPosition() == 0) {
                        console.log("tout à gauche");
                        rightButton();
                    } else if (matrix[6][game.getPosition()] == 1 && matrix[6][game.getPosition() - 1] == 0) {
                        console.log("1");

                        leftButton();
                    } else if (matrix[6][game.getPosition()] == 1 && matrix[6][game.getPosition() - 1] == 1) {
                        console.log("2");

                        rightButton();
                    } else if (matrix[6][game.getPosition()] == 1 && matrix[6][game.getPosition() + 1] == 1) {
                        console.log("3");

                        leftButton();
                    } else if (matrix[6][game.getPosition()] == 1 && matrix[6][game.getPosition() + 1] == 0) {
                        console.log("4");

                        leftButton();
                    }
                }
                console.log(matrix);
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
    document.getElementById('btnDirection').style.display = 'block'
    start()
}

function buttonIA() {
    start();
    isItIA = true;
}

function timer() {
    var secs = 0;
    var min = 0;
    var timer = setInterval(function () {
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
    }, 1000);
};


function reset() {
    document.getElementById('btnFormat').style.display = 'block'
    document.getElementById('game').style.display = 'block'
    document.getElementById('displayZone').style.visibility = 'hidden'
    document.getElementById('gameOver').style.display = 'none'
    document.getElementById('score').innerHTML = `La promo en sueur`
}


function leftButton() {
    game.left()
    document.querySelector("img[src='./src/assets/img/pigeon.gif']").style.transform = "scaleX(-1)";
}

function rightButton() {
    game.right()
    document.querySelector("img[src='./src/assets/img/pigeon.gif']").style.transform = "scaleX(1)";
}