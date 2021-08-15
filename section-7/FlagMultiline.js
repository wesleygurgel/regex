const texto = `
Leo é muito legal
EManuel foi jogar em Sergipe
BIanca é casada com Habib
`

console.log(texto.match(/\n/gi))
console.log(texto.match(/^(\w).+\1$/gi))
console.log(texto.match(/^(\w).+\1$/gim))