// HELPER D'AFFICHAGE

const VALUE_EMPTY = 0
const VALUE_DROPLET = 1
const VALUE_PLAYER = 2
const VALUE_DROPLET_ON_PLAYER = 3

const CHAR_EMPTY = ' '
const CHAR_DROPLET = '\ud83c\udf22' // \ud83c\udf22
const CHAR_PLAYER = '👁'
const CHAR_DROPLET_ON_PLAYER = '#'

// helper d'affichage
const DisplayHelper = {

    // création de la chaine d'affichage à partir de la matrice du jeu
    makeMatrixString(matrix, playerPosition) {
        var matrixString = ''
        var lineString = null
        var line = null
        for (var i = 0; i < matrix.length; i++) {
            line = matrix[i]
            if (matrixString != '') {
                matrixString += '\n'
            }

            // cas des lignes du haut
            lineString = ''
            if (i < matrix.length - 1) {

                for (var value of line) {
                    switch (value) {
                        case VALUE_EMPTY:
                            lineString += '[' + CHAR_EMPTY + ']'
                            break;
                        case VALUE_DROPLET:
                            lineString += '[' + CHAR_DROPLET + ']'
                            break;
                        default:
                            lineString += '[?]'
                    }
                }

            } else { // ligne du bas
                lineString = this._lastLine(line, playerPosition)
            }
            matrixString += lineString

        }
        return matrixString;
    },

    // cas de la la dernière ligne, prise en comple de la position du joueur
    _lastLine(line, position) {
        var lineString = ''
        var value = null
        for (var i = 0; i < line.length; i++) {
            value = line[i]
            if (i != position) {
                switch (value) {
                    case VALUE_EMPTY:
                        lineString += '[' + CHAR_EMPTY + ']'
                        break;
                    case VALUE_DROPLET:
                        lineString += '[' + CHAR_DROPLET + ']'
                        break;

                    default:
                        lineString += '[?]'
                }
            } else {
                if (value == VALUE_DROPLET) {
                    lineString += '[' + CHAR_DROPLET_ON_PLAYER + ']'
                } else {
                    lineString += '[' + CHAR_PLAYER + ']'
                }
            }



        }
        return lineString
    }


}