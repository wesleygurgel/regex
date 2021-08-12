const texto = 'ABC [abc] a-c 1234'

console.log(texto.match(/[a-c]/g))
console.log(texto.match(/a-c/g)) // nao define um range

console.log(texto.match(/[A-z]/g)) // intervalos usam a tabela unicode

// console.log(texto.match(/[a-Z]/g)) - DA ERRO QUE A ORDEM TA ERRADA
// console.log(texto.match(/[4-1]/g)) - DA ERRO QUE A ORDEM TA ERRADA





