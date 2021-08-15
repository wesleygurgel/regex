const texto = 'ROmário era um excelente jogador\n, mas hoje é um político questionador'

console.log(texto.match(/^r.*$/gi)) // problema do dotall

console.log(texto.match(/^r[\s\S]*$/gi)) // problema do dotall

// console.log(texto.match(/\S/gi))
