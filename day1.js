let loadInput = require('./input')

async function part1() {
  let input = await loadInput(1, 1)
  let array =  input.split('\r\n')

  let total = 0;
  array.forEach(element => {
    let operation = element[0]
    let value = parseInt(/\d.*/.exec(element)[0])
    total += (operation == '-') ? value * -1 : value
  });
  console.log('The answer for part 1 is: '+ total)
}

async function part2() {
  let input = await loadInput(1)
  let array =  input.split('\r\n')
  let total = 0;
  let totalsArray = [ total ]
  let answer = 0;
  let found = false;
  while(!found){
    array.forEach(element => {
      let value = parseInt(element)
      total += value
      if (totalsArray.includes(total) && !found){
        found = true;
        answer = total
      }
      totalsArray.push(total)
    });
  }
  console.log('The answer for part 2 is: ' + answer)
}

part1()
part2()
