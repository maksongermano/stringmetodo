// quero obter apenas dois digitos
// do estado de uma cidade

const cidade = "Natal-RN";

const penultimoIndex = cidade.length - 2;
let estado = cidade.slice(penultimoIndex);
console.log(estado);// como o indice negativo é utilizado para contar de tras para frente, podemos fazer esse cáuculo simples para poder deixar o código mais robusto de maneira que em qualquer circunstância ele funcionaria.