const fs = require('fs')
const path = require('path')

const nodeEnv = process.env.NODE_ENV || 'development'

let pathToConfigFile = path.join(__dirname, `${nodeEnv}.json`)
module.exports = JSON.parse(fs.readFileSync(pathToConfigFile, 'utf8'))
