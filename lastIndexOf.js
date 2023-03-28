const possivelEmail = 'Maksongermano@gmail.com';

const indexArrroba = possivelEmail.lastIndexOf('@');
const indexPontoAposArroba = possivelEmail.lastIndexOf('.', indexArrroba);// perceba que esse exemple tem uma virgula e outro elemento após, quer dizer que eu quero que ele procure o indice após o que eu coloquei ai.

if (indexPontoAposArroba > indexArrroba) {
    console.log("E-mail atende as requisições")
} else {
    console.log('Não há nenhum ponto após o @');
}
