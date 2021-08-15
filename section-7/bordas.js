const texto = 'ROmário era um excelente jogador\n, mas hoje é um político questionador'

console.log(texto.match(/r/gi))
console.log(texto.match(/^r/gi)) // ^ inicio de linha fora de um conjunto
console.log(texto.match(/r$/gi)) // $ fim da linha/string
console.log(texto.match(/^r.*$/gi)) // problema do dotall


