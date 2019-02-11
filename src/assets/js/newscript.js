var game = new SweatyPromoClient.offline()

let vide = "./src/assets/img/vide.png";
let caca = "./src/assets/img/caca.png";
let player = "./src/assets/img/pigeon.gif";
// let isItEnd = false;

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
        }
    }
})

game.on('sweaty', () => {
    document.getElementById('game').style.display = 'none'
    document.getElementById('gameOver').style.display = 'block'
    document.getElementById('gameOverMessage').style = '-webkit-animation : unzoom 0.5s';
    // isItEnd = true;
    game.pause()
    console.log('perdu')
})

function start() {
    // game.start()
    // console.log("Hey")

    // // isItEnd = false
    // document.getElementById('btnDirection').style.visibility = 'visible'
    // document.getElementById('btnFormat').style.visibility = 'hidden'
    // document.getElementById('displayZone').style.visibility = 'visible'

}

function buttonJouer() {
    game.start()
    //     // timer()
    document.getElementById('btnDirection').style.visibility = 'visible'
    document.getElementById('btnFormat').style.visibility = 'hidden'
    document.getElementById('displayZone').style.visibility = 'visible'
    start()
}

function buttonIA() {
    game.start()
    //     // timer()
    start()
    document.getElementById('btnDirection').style.visibility = 'hidden'
    document.getElementById('btnFormat').style.visibility = 'hidden'
    document.getElementById('displayZone').style.visibility = 'visible'
    game.on('matrix', (matrix) => {
        for (let x = 0; x < matrix.length; x++) {
            for (let y = 0; y < matrix[x].length; y++) {
                if (matrix[6][game.getPosition()] == 1 && game.getPosition() == 0) {
                    rightButton();
                } else if (matrix[6][game.getPosition()] == 1 && matrix[6][game.getPosition() - 1] == 0) {
                    leftButton();
                } else if (matrix[6][game.getPosition()] == 1 && matrix[6][game.getPosition() - 1] == 1) {
                    rightButton();
                } else if (matrix[6][game.getPosition()] == 1 && matrix[6][game.getPosition() + 1] == 1) {
                    leftButton();
                } else if (matrix[6][game.getPosition()] == 1 && matrix[6][game.getPosition() + 1] == 0) {
                    leftButton();
                }
            }
        }
        console.log(matrix[6][game.getPosition()]);
        console.log(game.getPosition());
    })
}

// function timer() {
//     var secs = 0;
//     var min = 0;
//     var timer = setInterval(function () {
//         document.getElementById('score').innerHTML = `Temps : ${min}m ${secs++}s`;
//         console.log(secs);
//         if (secs == 60) {
//             secs = 0
//             min++;
//         }
//         if (isItEnd == true) {
//             clearInterval(timer)
//             secs = 0;
//             min = 0;
//         }
//     }, 1000);
// };


// function Reset() {
//     document.getElementById('btnFormat').style.visibility = 'visible'
//     document.getElementById('game').style.display = 'block'
//     document.getElementById('displayZone').style.visibility = 'hidden'
//     document.getElementById('gameOver').style.display = 'none'
//     document.getElementById('score').innerHTML = `La promo en sueur`
// }


function leftButton() {
    game.left()
    // document.querySelector("img[src='./src/assets/img/pigeon.gif']").style.transform = "scaleX(-1)";
}

function rightButton() {
    game.right()
    // document.querySelector("img[src='./src/assets/img/pigeon.gif']").style.transform = "scaleX(1)";
}