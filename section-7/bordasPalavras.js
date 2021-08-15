const texto1 = 'dia diatonico diafragma media wikipedia bom_dia melodia radial'

console.log(texto1.match(/\bdia\w+/gi))
console.log(texto1.match(/\w+dia\b/gi))
console.log(texto1.match(/\w+dia\w+/gi))
console.log(texto1.match(/\bdia\b/gi))

// borda é o não \w -> [^A-Za-z0-9_]... problemas com acentos!

const texto2 = 'dia diatônia diafragma, média wikipédia bom-dia melodia radial'

console.log(texto2.match(/\bdia\b/gi)) // dia, m(é)dia wikip(é)dia bom(-)dia
console.log(texto2.match(/(\S*)?dia(\S*)?/gi)) 
console.log(texto2.match(/([\wÀ-ú-]*)?dia([\wÀ-ú-]*)?/gi)) 
console.log(texto2.match(/([\wÀ-ú-]*)?dia\1?/gi)) 