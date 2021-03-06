const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'
    }
}
const argv = require('yargs')
    .command('listar', 'Imprime la tabla de multiplicar', opts)
    .command('crear', 'Crea la tabla de multiplicar en .txt', opts)
    .help()
    .argv;

module.exports = {
    argv
}