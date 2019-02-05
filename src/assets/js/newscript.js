let matrice = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
];
let vide = "./src/assets/img/vide.png";
let caca = "./src/assets/img/caca.png";
var x = [0, 1, 2, 3, 4];
var chooseX;

function premierCaca() {
    var chooseX = x[Math.floor(Math.random() * x.length)];

    setTimeout(() => {
        console.log(chooseX)
        matrice[0][chooseX] = 1;
        console.log(matrice)
        console.log(document.getElementById("0").getElementsByClassName(chooseX)[0])
        monImg = document.getElementById("0").getElementsByClassName(chooseX)[0];
        monImg.src = caca;
    }, 1000);
    setTimeout(() => {
        matrice[0][chooseX] = 0;
        matrice[1][chooseX] = 1;
        monImg.src = vide
        document.getElementById("1").getElementsByClassName(chooseX)[0].src = caca;
        premierCaca()
    }, 3000);
}

premierCaca();

game.on('matrix', (matrix) => {

})
