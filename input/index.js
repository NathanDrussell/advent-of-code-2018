const fs  = require('fs')

module.exports = async (day) => {
  let file = await fs.readFileSync(`${__dirname}/day${day}.txt`)
  return file.toString()
}