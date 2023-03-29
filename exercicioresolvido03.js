// Variavel tipo string

function imprimirData(dia, mes, ano) {
    console.log(`${dia.padStart(2, '0')}/${mes}/${ano}`);
}
//os tres arguemntos tem que ser do tipo number
imprimirData(1, 1, 2023);
