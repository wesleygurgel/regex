const texto = '1,2,3,4,5,6,a.b c!d?e[f'

console.log(texto.match(/[a-z]/g))
console.log(texto.match(/[b-f]/g))
console.log(texto.match(/[0-9]/g))
console.log(texto.match(/[A-f1-3]/gi))
