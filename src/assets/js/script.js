// instance de la class du jeu
var game = new SweatyPromoClient.offline()

// zone d'affichage
var displayZone = document.getElementById('displayZone')

// nouvelle matrice des gouttes
game.on('matrix', (matrix) => {
    updateDisplay(matrix)
})

// perdu, en sueur
game.on('sweaty', () => {
    document.getElementById('gameOverMessage').style.visibility = 'visible'
    document.getElementById('gameOverMessage').style = '-webkit-animation : unzoom 0.5s';
    document.getElementById('startButton').style.visibility = 'visible'
    console.log('En sueur !')
})

// mise à jour de l'affichage
function updateDisplay(matrix) {
    if (!matrix) {
        matrix = game.getMatrix()
    }
    // création de la chaine d'affichage de la matrice
    var matrixString = null

    matrixString = DisplayHelper.makeMatrixString(matrix, game.getPosition())

    // actualisation de l'affichage
    displayZone.innerHTML = matrixString
}

// bouton de lancement
function startButton() {
    document.getElementById('gameOverMessage').style.visibility = 'hidden'
    // document.getElementById('gameOverMessage').style = '';
    document.getElementById('startButton').style.visibility = 'hidden'
    //
    game.start()
}

// bouton vers la gauche
function leftButton() {
    game.left()
    //
    updateDisplay()
}

// bouton vers la droite
function rightButton() {
    game.right()
    //
    updateDisplay()
}

// première affichage
displayZone.innerHTML = DisplayHelper.makeMatrixString(game.getMatrix(), game.getPosition())

// auto start
startButton()