'use strict'

const numeros = [20, 131, 70, 279, 320]

// PROBLEMA -- Acrescentar 100 a cada elemento

// ----- Solução imperativa -----

// const limite = numeros.length -1
// let numeros100 = []

// for (let i=0; i <= limite; i++)
// {
//     numeros100[i] = numeros[i] + 100
// }

// ---- Solução declarativa -----

// Map - Percorre o array podendo modificar ou não
// e retornando um novo array do msm tamanho

// 1° Elemento
// 2° Inice
// 3° Array

const adicionar100 = (numero) => numero + 100
const numeros100 = numeros.map(adicionar100)
                         // O map que chama a funtion adicionar100

// PROBLEMA - Criar outro array com os numeros menores que 100

// ----- Solução Imperativa -----

// const limite = numeros.length -1
// let numerosMenores100 = []
// let cont =0

// for (let i=0 ; i <= limite ; i++)
// {
//     if(numeros[i] <= 100)
//     {
//         numerosMenores100[cont] = numeros[i]
//         cont++
//     }
    
// }

// ----- Solução Declarativa -----

// Filter -- Percorre todo o array filtrando dependendo de uma 
// condição e retorna um array do msm tamanho ou menor 

const numMenor100 = (numero) => numero <= 100
const numerosMenores100 = numeros.filter(numMenor100)

// PROBLEMA -- Somar todos os valores (elementos)

// ----- Solução Imperativa -----
    let limite = numeros.length -1
    let valorNumeros = 0

    for(let i=0; i <= limite; i++)
    {
        valorNumeros = valorNumeros + numeros[i]
    }



console.log("numeros:", numeros)
console.log("numeros mais 100:", numeros100)
console.log("numeros menores que 100:", numerosMenores100)
console.log("numeros somados do array:", valorNumeros)

// Aqui o programador estabeleceu o valor para aumentar 100
// console.log(adicionar100(123))


// Problema - somar todos os valores (elementos)
// Reduce - percorre todo o array aplicando um funçaõ (callback)
// e retorna um unico valor
// 1 Acumulador
// 2 Elemento (valor)
// 3 Indice
// 4 array

const soma = (a, b ) => a + b
const total1 = numeros.reduce(soma, 0) 

// 1- Criar um novo array com os valores ao quadrado

const numerosQuadrado = (numero) => numero * numero
const resultadoAoQuadrado = numeros.map(numerosQuadrado)


console.log("-------------------------")
console.log("Atividade 1")
console.log("Resultado numeros ao quadrado:",resultadoAoQuadrado)


// 2- Criar um novo array com os valores pares 

const numerosPares = (numero) => numero %2 ==0
const resultaDosPares = numeros.filter(numerosPares)

console.log("-------------------------")
console.log("Atividade 2")
console.log("Esses são os numeros pares:",resultaDosPares)


// 3- Calcular a média dos valores 

const somaDosNumeros = (valor1, valor2) => valor1 + valor2
const resultadoMedia = numeros.reduce(somaDosNumeros)/ numeros.length

console.log("-------------------------")
console.log("Atividade 3")
console.log("Essa é a média dos numeros:", resultadoMedia)


// 4- Calcular o valor total dos valores impares

const validador = (numero) => numero %2 != 0
const numerosImpares = numeros.filter(validador)
const resultadoSomaImpares = numerosImpares.reduce((a, b) => a + b)

console.log("-------------------------")
console.log("Atividade 4")
console.log("Soma dos numeros impares:", resultadoSomaImpares)


// 5- Calcular o valor total, sabendo que cada teve 20% de desconto

const desconto = (value) => value - (0.2 * value)
const atribuindoDesconto = numeros.map(desconto)
const somar = atribuindoDesconto.reduce((a, b ) => a + b )
console.log("-------------------------")
console.log("Atividade 5")
console.log("numeros com desconto:",atribuindoDesconto)
console.log("Soma dos numeros com 20% de desconto:", somar)
console.log("-------------------------")
