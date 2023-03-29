function replaceAll(original, text, newText) {
    while (original !== original.replace('text', 'newText')) {
        original = original.replace('text', 'newText')
    }
    return original;
}

let numero = '1,350,000';

// uma forma interessante de resolver esse problema é repetir o procedimento até que não tenha mais , e pontos
// temos essa outra forma que consiste em aplicar a formula até 'se acabar' o problema.
// numero = numero.replace(',', '.');
// numero = numero.replace(',', '.');
// numero = numero.replace(',', '.')
// // você também pode colocar isso tudo num while, nesse caso ele fara a operação até que a condição esteja cumprida ou seja enquanto estiver dando diferente ele irá aplicar a formula.

// while (numero !== numero.replace(',', '.')) {
//     numero = numero.replace(',', '.')
// }
console.log(replaceAll(numero, ',', '.'))// no fim de tudo criei uma função para guardar esse mecanismo e a coloquei no topo do meu código, pq não importa o lugar que uma função está, ela sempre será chamada.