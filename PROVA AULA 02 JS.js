const nome = prompt("Qual seu nome?")
let altura = prompt("Qual sua altura em cm?")
altura = altura / 100
const peso = prompt("Qual seu peso?")
const imc = peso / (altura * altura)


if (imc < 16)
{alert(`${nome} com IMC DE ${imc}- BAIXO PESO MUITO GRAVE!`)}
else if (imc >= 16 && imc < 16.99)
{alert(`${nome} com IMC DE ${imc}- BAIXO PESO GRAVE!`)}
else if (imc >= 17 && imc <= 18.49)
{alert(`${nome} com IMC DE ${imc}- BAIXO PESO!`)}
else if (imc >= 18.50 && imc <= 24.99)
{alert(`${nome} com IMC DE ${imc}- PESO NORMAL!`)}

else if (imc >= 25 && imc <= 29.99)
{alert(`${nome} com IMC DE ${imc}- SOBREPESO!`)}
else if (imc >= 30 && imc <= 34.99)
{alert(`${nome} com IMC DE ${imc}- OBESIDADE GRAU I !`)}
else if (imc >= 35 && imc <= 39.99)
{alert(`${nome} com IMC DE ${imc}- OBESIDADE GRAU II!`)}
else if (imc >= 40)
{alert(`${nome} com IMC DE ${imc}- OBESIDADE GRAU III!`)}
