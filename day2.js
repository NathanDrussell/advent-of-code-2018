let loadInput = require('./input')


function part1() {
  let input = loadInput(2)
  let array = input.split('\r\n')
  let tot3 = 0;
  let tot2 = 0;
  array.forEach(line => {
    let obj = {}
    Array.from(line).forEach(char => {
      if (obj[char] === undefined) {
        obj[char] = 1
      } else {
        obj[char] += 1
      }
    })

    let cantBeThree = false;
    let cantBeTwo = false
    Object.keys(obj).forEach(key => {
      if (obj[key] === 2 && !cantBeTwo) {
        tot2++;
        cantBeTwo = true;
      }
      if (obj[key] === 3 && !cantBeThree) {
        tot3++;
        cantBeThree = true;
      }
    })
  });
  console.log('The answer to Day 2 Part 1 is: ' + (tot2 * tot3))
}

function part2() {
  let input = loadInput(2)
  let array =  input.split('\r\n')
  let result = ''
  array.forEach(line => {
    let source = Array.from(line)
    array.forEach(lineToCompare =>{
      let comparison = []
      let total = 0;
      let pos = 0;
      if (line != lineToCompare){
        comparison = Array.from(lineToCompare)
        for (let i = 0; i < source.length; i++){
          if (source[i] != comparison[i]) {
            total++;
            pos = i
          }
        }
      }
      if (total == 1){
        source.splice(pos,1)
        result = source.join('')
        console.log('The answer to Day 2 Part 2 is: ' + result)
        console.timeEnd('gpu')
        process.exit()
      }
    })
  });
}





part1();
part2();