import chalk from 'chalk'
import logSymbols from 'log-symbols'

console.log(logSymbols.success, chalk.green.italic("servidor iniciado com sucesso!"))

console.log('Hello World!')

var blue = chalk.blue.bold('Lapso Blue')
var red = chalk.red.bold('Reversal Red')

var purple = chalk.magenta('Hollow Purple')
console.log(`${red} + ${blue} = ${purple}`)

console.log(logSymbols.error, chalk.red.italic("erro ao conectar ao banco de dados!"))