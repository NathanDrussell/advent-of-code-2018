let loadInput = require('./input')
let input = loadInput(1)
let array = input.split('\r\n').map(val => parseInt(val))

function part1() {
  let total = 0;
  array.forEach(element => {
    total += element
  });
  console.log('The answer for part 1 is: ' + total)
}

function part2() {
  let total = 0;
  let answer = 0;
  let totalsArray = { total }
  let found = false;
  while (!found) {
    array.forEach(element => {
      total += element
      if (totalsArray[total] && !found) {
        found = true;
        answer = total
        console.log('The answer for part 2 is: ' + answer)
        process.exit()
      }
      totalsArray[total] = true
    });
  }
}

part1()
part2()


