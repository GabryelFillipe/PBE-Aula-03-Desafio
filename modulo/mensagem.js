/***********************************************************************************
 * Objetivo: Arquivo responsaável por criar a mensagem de agradecimento ao cliente
 * Autor:Gabryel Fillipe
 * Data:05/08/2025
 * Versão:1.0
 **********************************************************************************/


function mensagemRetorno(valor1, valor2, valor3 , valor4, valor5){

    let nomeEmpresa = 'Viva moda'
    let nomeCliente = valor1
    let nomeProduto = valor2
    let capitalInicial = valor3
    let parcelasPorAno = valor4
    let montante = valor5


    
    let mensagemCliente = `
    ******************** ${nomeEmpresa} ***********************************
    Muito obrigado por realizar a sua compra conosco Sr(a) ${nomeCliente}.
    A compra do produto ${nomeProduto}, tem um valor de: R$:${capitalInicial} .
    A sua compra será parcelada em ${parcelasPorAno} vezes e o Sr(a) pagará: R$:${montante}
    Muito obrigado por escolher a ${nomeEmpresa}.
    ******************************************************************`
    return mensagemCliente
}
module.exports = {
    mensagemRetorno
}