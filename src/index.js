import chalk from 'chalk'

console.log('Hello World!')

var blue = chalk.blue.bold('Lapso Blue')
var red = chalk.red.bold('Reversal Red')

var purple = chalk.magenta('Hollow Purple')
console.log(`${red} + ${blue} = ${purple}`)