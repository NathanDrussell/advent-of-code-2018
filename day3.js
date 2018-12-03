let loadInput = require('./input')
let input = loadInput(3)
let array = input.split('\r\n')

function part1() {

  let fabric = []
  for (i = 0; i < 1000; i++) {
    fabric[i] = []
    for (j = 0; j < 1000; j++) {
      fabric[i].push('.')
    }
  }


  let noOfOverlaps = 0;

  array.forEach(claim => {
    let claimID = parseInt(claim.split('@ ')[0].trim())
    let claimX = parseInt(claim.split('@ ')[1].split(',')[0])
    let claimY = parseInt(claim.split('@ ')[1].split(',')[1].split(':')[0])
    let claimW = parseInt(claim.split(':')[1].split('x')[0])
    let claimH = parseInt(claim.split(':')[1].split('x')[1])
    let claimOverlapped = false;

    for (let i = claimX; i < claimX + claimW; i++) {
      for (let j = claimY; j < claimY + claimH; j++) {
        if (fabric[i][j] === '.') {
          fabric[i][j] = "#"
        } else if (fabric[i][j] === '#') {
          fabric[i][j] = "~"
          noOfOverlaps++;
        }
      }
    }

    // console.log(claimX +', '+ claimY)
    // console.log(claimW +', '+ claimH)
  })
  console.log(`The answer to part1 is: ` + noOfOverlaps)


}

function part2() {
  let fabric = []
  for (i = 0; i < 1000; i++) {
    fabric[i] = []
    for (j = 0; j < 1000; j++) {
      fabric[i].push('.')
    }
  }


  let noOfOverlaps = 0;

  let gg = {}
  array.forEach(claim => {
    let claimID = claim.split('@ ')[0].trim()
    let claimX = parseInt(claim.split('@ ')[1].split(',')[0])
    let claimY = parseInt(claim.split('@ ')[1].split(',')[1].split(':')[0])
    let claimW = parseInt(claim.split(':')[1].split('x')[0])
    let claimH = parseInt(claim.split(':')[1].split('x')[1])
    let claimOverlapped = false;
    for (let i = claimX; i < claimX + claimW; i++) {
      for (let j = claimY; j < claimY + claimH; j++) {
        if (fabric[i][j] === '.') {
          fabric[i][j] = claimID
        } else if (fabric[i][j].includes('#')) {
          gg[claimID] = true;
          gg[fabric[i][j]] = true;
          fabric[i][j] = claimID
          claimOverlapped = true;
        }
      }
    }
  })
  for (i = 0; i < array.length; i++) {
    if (!gg[`#${i + 1}`]) {
      console.log('The answer to part2 is: ' + (i + 1))
    }
  }
}

part1()
part2()