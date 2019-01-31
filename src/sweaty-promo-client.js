
const VALUE_EMPTY = 0
const VALUE_DROPLET = 1
const VALUE_PLAYER = 2

const CHAR_EMPTY = ' '
const CHAR_DROPLET = '\ud83c\udf22' // \ud83c\udf22
const CHAR_PLAYER = '👁'

var gameMatrix = [
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 2, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 2, 0, 1]
]

var playerPosition = 2


// création de la chaine d'affichage à partir de la matrice du jeu
function makeMatrixDisplayString(gameMatrix) {
    var matrixString = ''
    var lineString = null
    for (var line of gameMatrix) {
        if (matrixString != '') {
            matrixString += '\n'
        }
        lineString = ''
        for (var value of line) {
            switch (value) {
                case VALUE_EMPTY:
                    lineString += '[' + CHAR_EMPTY + ']'
                    break;
                case VALUE_DROPLET:
                    lineString += '[' + CHAR_DROPLET + ']'
                    break;
                case VALUE_PLAYER:
                    lineString += '[' + CHAR_PLAYER + ']'
                    break;
                default:
                    lineString += '[?]'
            }
        }
        matrixString += lineString
    }
    return matrixString;
}


// affichage de la matrice
function displayMatrix() {
    var displayZone = document.getElementById('displayZone')


    displayZone.innerHTML = makeMatrixDisplayString(gameMatrix)
}