const n1 = Number(prompt("Digite a primeira nota: "))

const n2 = Number(prompt("Digite a segunda nota: "))

const n3 = Number(prompt("Digite a terceira nota: "))

const p1 = 1

const p2 = 2

const p3 = 3

const soma_pesos = p1 + p2 + p3

const media = (n1 * p1) + (n2 * p2) + (n3 * p3) /  soma_pesos

console.log(`A média ponderada dos números digitados é ${media}`)