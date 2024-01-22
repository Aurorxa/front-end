type Fish = {
    swim: () => void
}

type Dog = {
    run: () => void
}

function move(animal: Fish | Dog) {
    if ("swim" in animal) {
        animal.swim()
    }

    if ("run" in animal) {
        animal.run()
    }
}

const fish: Fish = {
    swim: () => {
        console.log("fish swim")
    }
}

move(fish)

const dog: Dog = {
    run: () => {
        console.log("dog run")
    }
}

move(dog)

export {}