// Subistitui text por NewTex em uma string
//esse método procura por um texto numa string e substitui a primeira ocorrência por newtext, ao encontrar.
const texto = 'Eu amo satanael e meu mago, bem como os meus animais de estimação';// o replace faz uma 'cópia' e exibe, mas não muda o texto original, ele só modifica para exibir.
const parte = texto.replace('amo', 'adoro');
console.log(parte)