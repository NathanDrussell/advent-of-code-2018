let loadInput = require('./input')

async function part1() {
  let input = await loadInput(2)
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


async function part2() {
  let input = await loadInput(2)
  let array =  input.split('\r\n')
  let result = ''
  array.forEach(element => {
    let orig = Array.from(element)
    array.forEach(_element =>{
      let _new = []
      let total = 0;
      let pos = 0;
      if (element != _element){
        _new = Array.from(_element)
        for (let i = 0; i < orig.length; i++){
          if (orig[i] != _new[i]) {
            total++;
            pos = i
          }
        }
      }
      if (total == 1){
        orig.splice(pos,1)
        result = orig.join('')
      }
    })
  });
  console.log('The answer to Day 2 Part 2 is: ' + result)


  
}

part1();
  part2();