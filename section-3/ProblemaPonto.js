const texto = 'Bom\ndia'

console.log(texto.match(/.../ig))
console.log(texto.match(/..../ig)) // o ponto não engloba o \n


// dotall - algumas linguages tem uma flag /exp/s, mas JS Não!
