/***********************************************************************************
 * Objetivo: Arquivo responsaável por calcular os juros compostos dos produtos
 * Autor:Gabryel Fillipe
 * Data:05/08/2025
 * Versão:1.0
 **********************************************************************************/

// m= p x (1 + r/n)^n x t

// é o principal (capital inicial).
// 𝑟 é a taxa de juros anual (em decimal).
// 𝑛 é o número de vezes que os juros são compostos por ano.
// 𝑡 é o tempo em anos.

function calcularMontante (valor1,valor2,valor3,valor4) {

    let capitalInicial = valor1
    let taxaJuros = valor2
    let parcelasPorAno = valor3
    let periodoEmMeses = valor4

    //console.log(Math.pow(1.24, 120))
    //Converter taxa para porcentagem
    let taxaJurosPorcentagem = taxaJuros/100

    // Converter o período para anos
    let periodoEmAnos = periodoEmMeses / 12; 

    //Aplicar a fórmula correta com o expoente ajustado
    let montante = capitalInicial * (1 + taxaJurosPorcentagem / parcelasPorAno) ** (parcelasPorAno * periodoEmAnos);

    

    return Number(montante).toFixed(2)
}

module.exports = {
    calcularMontante
}