type ISwim = {
  swim: () => void
}

type IRun = {
  run: () => void
}


function move(animal: ISwim | IRun) {
  if ('swim' in animal) {
    animal.swim()
  } else if ('run' in animal) {
    animal.run()
  }
}


const fish = {
  swim: () => console.log('fish swim')
}


const dog = {
  run: () => console.log('Dog run')
}


move(fish)
move(dog)


export { }