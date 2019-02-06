var game = new SweatyPromoClient.offline()

let vide = "./src/assets/img/vide.png";
let caca = "./src/assets/img/caca.png";
let smiley = "./src/assets/img/happy.png";
var wherePlayer = document.querySelector("img[src='./src/assets/img/happy.png']");


wherePlayer.src = smiley;
let getClass = wherePlayer.className;

game.on('matrix', (matrix) => {
    for (let x = 0; x < matrix.length; x++) {
        for (let y = 0; y < matrix[x].length; y++) {
            if (matrix[x][y] == 1) {
                document.getElementById(x).getElementsByClassName(y)[0].src = caca;
            } else if (matrix[x][y] == 0) {
                document.getElementById(x).getElementsByClassName(y)[0].src = vide;
            } else if (matrix[x][y] == 2)
                document.getElementById(x).getElementsByClassName(y)[0].src = smiley;
        }
    }
    console.log(matrix)
    console.log(wherePlayer);
    console.log(getClass)
})

function leftButton() {
    if (wherePlayer.className < 5 && wherePlayer.className >= 0) {
        wherePlayer.src = vide;
        let newPlayer = wherePlayer.className - 1;
        let whereNewPlayer = document.getElementById(7).getElementsByClassName(newPlayer)[0];
        console.log(whereNewPlayer)
        whereNewPlayer.src = smiley;
    }
}

function rightButton() {
    game.right()
}