type DirectionType = 'left' | 'right' | 'up' | 'down'

function changeDirection(direction: DirectionType) {
    switch (direction) {
        case 'left':
            console.log('left')
            break
        case 'right':
            console.log('right')
            break
        case 'up':
            console.log('up')
            break
        case 'down':
            console.log('down')
            break
        default:
            console.log('default')
            break
    }
}

changeDirection('left');


export {}