const texto = '.$+*?-'

console.log(texto.match(/[.$+*?]/g))
console.log(texto.match(/[$-?]/g))  // isso é um intervalo range

// não é intervalo
console.log(texto.match(/[$\-?]/g))
console.log(texto.match(/[-?]/g))

// pode precisar do escape dentro do conjunto: - [] ^