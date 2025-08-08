/******************************************************************************************************************************
 * Objetivo: Criar u,, sistema de gestão integrado para melhorar a eficiência, a precisão e o controle das operações diárias.
 * Autor: Gabryel Fillipe
 * Data: 05/08/2025
 * Versão: 1.0
 *****************************************************************************************************************************/

const MESSAGE_ERROR_EMPTY = 'ERRO: Existem campos que não foram preenchidos.'
const MESSAGE_ERROR_NOT_NUMBER = 'ERRO: Não é possivel calcular com a entrada de letras'

var readline = require('readline')

var jurosComposto = require('./modulo/juros.js')
var mensagemFinal = require('./modulo/mensagem.js')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


entradaDeDados.question('Digite o seu nome:', function(nome){
    
    let nomeCliente = String(nome).toUpperCase()

    entradaDeDados.question('Digite o produto desejado:', function(valor1){
        let nomeProduto = valor1
        
        entradaDeDados.question('Digite o capital inicial:', function(valor2){

            let capitalInicial = valor2

            entradaDeDados.question('Digite a taxa de juros anual:', function(valor3){

                let juros = valor3

                entradaDeDados.question('Digite o número de parcelas que compõem o juros ao ano:', function(valor4){

                    let parcelasPorAno = valor4

                    entradaDeDados.question('Digite a quantidade de anos que o juros continuará sendo composto em meses:', function(valor5){

                        let periodo = valor5

                        if(nomeCliente == '' || nomeProduto == '' || capitalInicial =='' || juros == '' || parcelasPorAno == '' || periodo == '' ){
                        console.log(MESSAGE_ERROR_EMPTY)
                        }else if(isNaN(capitalInicial) || isNaN(juros || isNaN(parcelasPorAno) || isNaN(periodo))){
                        console.log(MESSAGE_ERROR_NOT_NUMBER)
                        }else {
                        let montante = jurosComposto.calcularMontante(capitalInicial, juros, parcelasPorAno, periodo)
                            let mensagemCliente = mensagemFinal.mensagemRetorno(nomeCliente, nomeProduto, capitalInicial, parcelasPorAno, montante)
                       

                        console.log(mensagemCliente)
                    }


                    })
                })
            })
        })
    })

})

