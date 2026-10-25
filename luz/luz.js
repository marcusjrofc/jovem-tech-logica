//Valores fixos (caixas com cadeado)
const taxafixa = 12.00
const precoKwH = 0.80
//Valores variáveis (caixas abertas)
let consumo = 150
let bandeiravermelha = 0.10

//Calculo
let precofinalKwH = precoKwH +  bandeiravermelha
let valorConta = (consumo * precofinalKwH) + taxafixa


console.log("Conta: R$ "+ valorConta.toFixed(2))