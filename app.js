/******************************************************************************************************************************
 * Objetivo: Criar u,, sistema de gestão integrado para melhorar a eficiência, a precisão e o controle das operações diárias.
 * Autor: Gabryel Fillipe
 * Data: 05/08/2025
 * Versão: 1.0
 *****************************************************************************************************************************/

const MESSAGE_ERROR_EMPTY = 'ERRO: Existem campos que não foram preenchidos.'
const MESSAGE_ERROR_NOT_NUMBER = 'ERRO: Não é possivel calcular com a entrada de letras'

var readline = require('readline')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


entradaDeDados.question('Digite o seu nome:', function(nome){
    
    let nomeCliente = String(nome).toUpperCase()

    entradaDeDados.question('Digite o capital inicial:', function(valor1){

        let capitalInicial = valor1

        entradaDeDados.question('Digite a taxa de juros anual:', function(valor2){

            let juros = valor2

            entradaDeDados.question('Digite o número de parcelas que compõem o juros ao ano:', function(valor3){

                let parcelasPorAno = valor3

                entradaDeDados.question('Digite a quantidade de anos que o juros continuará sendo composto em meses:', function(valor4){

                    let periodo = valor4 

                    if(nomeCliente == '' || capitalInicial =='' || juros == '' || parcelasPorAno == '' || periodo == '' ){
                        console.log(MESSAGE_ERROR_EMPTY)
                    }else if(isNaN(capitalInicial) || isNaN(juros || isNaN(parcelasPorAno) || isNaN(periodo))){
                        console.log(MESSAGE_ERROR_NOT_NUMBER)
                    }else {
                        let capitalInicial = valor1
                        let juros = valor2
                        let parcelasPorAno = valor3
                        let periodo = valor4
                    
                        let montante = Number(capitalInicial) * (1 + Number(juros)/Number(parcelasPorAno))^(Number(parcelasPorAno) *  Number(periodo))

                        console.log(montante)
                    }



                })
            })
        })
    })
})
