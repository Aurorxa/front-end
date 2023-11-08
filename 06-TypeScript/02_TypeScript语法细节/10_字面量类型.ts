type DirectionType = 'up' | 'down' | 'left' | 'right'

function choiceDirection(direction: DirectionType) {
    switch (direction) {
        case 'up':
            console.log('up')
            break
        case 'down':
            console.log('down')
            break
        case 'left':
            console.log('left')
            break
        case 'right':
            console.log('right')
            break
    }
}

choiceDirection('up')

export {}