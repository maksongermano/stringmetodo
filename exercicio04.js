const nome = 'makson matheus germano freitas';

// transforme o nome"makson matheus germano freitas em.
//Makson Matheus Germano Freitas

const arrayDeNomes = nome.split(" ");// primeiro passo é observar como fazemos isso, identificando os espaços e separando em uma string de nomes com o método Split('aqui vai o que você quer que ele busque')


//agora que testamos, p´reciso identificar a primeira letra de cada um e tornar maiuscula
let nomeFormatado = "";
for (let item of arrayDeNomes) {
    // transformar a inicial de cada item (nome) em maiúscula
    let primeiraLetra = item.slice(0, 1)
    let restanteDoNome = item.slice(1);

    nomeFormatado += primeiraLetra.toUpperCase() + restanteDoNome + " ";


}
console.log(nomeFormatado.trim())// o trim é usado para sumir com os espaços 