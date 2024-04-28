const numero_alunos = Number(prompt("Qual o número de alunos da turma? "))
let soma = 0
let maior = Number.NEGATIVE_INFINITY
let menor = Number.POSITIVE_INFINITY
let contador = 1
while (contador <= numero_alunos)
{
    
    const nota = Number(prompt("Qual a nota do aluno? "))

soma += nota
contador = contador + 1
    if(nota > maior){
        maior = nota
    }
    if(nota < menor){
        menor = nota
    }


}

const media = soma / numero_alunos
console.log(`A soma das notas dos alunos foi: ${soma}`);
console.log(`A média das notas dos alunos foi: ${media}`);
console.log(`A maior nota foi: ${maior}`);
console.log(`A menor nota foi: ${menor}`);
