const texto1 = 'O josé simão é muito engraçado... hehehehe'

console.log(texto1.match(/(he)+/g))

const texto2 = 'https://www.site.info www.escola.ninja.br google.com.ag'

console.log(texto2.match(/(http.?:\/\/)?(www\.)?\w+\.\w{2,}(\.\w{2})?/g))