// o método IndexOf() é o método que permite que você saber onde está um determinado texto, dentro de outro texto. Um indice que a letra está.
// é parecido com o  método includes, só que ele não devolve um valor buleano.


// eu quero saber se um e-mail é válido
// tem que ter pelo menos um @
// tem que ter pelo menos um ponto depois do @

const possivelEmail = 'Maksongermano@gmail.com';

const indexArrroba = possivelEmail.indexOf('@');
const indexPontoAposArroba = possivelEmail.indexOf('.', indexArrroba);// perceba que esse exemple tem uma virgula e outro elemento após, quer dizer que eu quero que ele procure o indice após o que eu coloquei ai.

if (indexPontoAposArroba > indexArrroba) {
    console.log("E-mail atende as requisições")
} else {
    console.log('Não há nenhum ponto após o @');
}
