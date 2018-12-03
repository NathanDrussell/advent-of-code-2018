const fs  = require('fs')

module.exports = (day) => {
  let file = fs.readFileSync(`${__dirname}/day${day}.txt`)
  return file.toString()
}