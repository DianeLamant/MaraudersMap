// instance de la class du jeu
var game = new SweatyPromoClient.offline()


game.on('matrix', (matrix) => {
    console.log('new matrix', matrix)
})

game.on('sweaty', () => {
    console.log('En sueur !')
})



// authentification
function startButton () {
    game.start()
}
