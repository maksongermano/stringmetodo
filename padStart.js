// Preenche uma string, colocando um text no inicio dela (varias vezes, se necessário) até que a string atinja o tamanho length
const ultimos4dig = '2345';
const numDoCartao = ultimos4dig.padStart(19, '**** ')
console.log(numDoCartao) //**** **** **** 2345
// esse método é muito útil quando você que preencher o inicio de algo por exemplo 001/002.
//003
//004
