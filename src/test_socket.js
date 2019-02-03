const socket = io('http://localhost:3000/')

const SweatyPromo = require('./class/SweatyPromo')

// nouvelle connection
socket.on('connect', () => {
    console.log('conn')
})

// matrix
socket.on('matrix', (matrix) => {
    console.log('matrix', matrix)
})



var sp = new SweatyPromo()

sp.testEvent()