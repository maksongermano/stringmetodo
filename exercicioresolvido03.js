// Variavel tipo string
// variaveis do tipo number não pode usar o padstart (só string pode)

function imprimirData(dia, mes, ano) {

    const diaFormatado = String(dia).padStart(2, '0');
    const mesFormatado = String(mes).padStart(2, '0');
    console.log(`${diaFormatado.padStart(2, '0')}/${mesFormatado}/${ano}`);// o primeiro argumento do pad start é o numero de objetos que você quer e depois o que ele deve preencher se não tiver no padrão primeiro
}
//os tres arguemntos tem que ser do tipo number
imprimirData(21, 5, 1991);
