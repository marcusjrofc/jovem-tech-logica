/* let aluno1 = "Ana", nota1 = 8
if (nota1 >= 7) {
    console.log(aluno1 + " - Aprovado")
} else {
    console.log(aluno1 + " - Em recuperação")
}

let aluno2 = "Bruno", nota2 = 5;
if (nota2 >= 7) {
    console.log(aluno2 + " - Aprovado")
} else {
    console.log(aluno2 + " - Em recuperação")
}

let aluno3 = "Carlos", nota3 = 7;
if (nota3 >= 7) {
    console.log(aluno3 + " - Aprovado");
} else {
    console.log(aluno3 + " - Em recuperação")
}

let aluno4 = "Daniela", nota4 = 4;
if (nota4 >= 7) {
    console.log(aluno4 + " - Aprovado");
} else {
    console.log(aluno4 + " - Em recuperação")
}

let aluno5 = "Eduardo", nota5 = 9;
if (nota5 >= 7) {
    console.log(aluno5 + " - Aprovado");
} else {
    console.log(aluno5 + " - Em recuperação")
}

let aluno6 = "Fernanda", nota6 = 5.5;
if (nota6 >= 7) {
    console.log(aluno6 + " - Aprovado");
} else {
    console.log(aluno6 + " - Em recuperação")
} */

/* Foram alteradas 12 linhas no total. Em cada um dos 6 blocos, foi necessário mudar a linha da condição (de >= 7 para >= 6) e a linha do else (de "Reprovado" para "Em recuperação"). */


//listas separadas
const nomes = ["Ana", "Bruno", "Carlos", "Daniela", "Eduardo", "Fernanda"]
const notas = [8, 5, 7, 4, 9, 5.5]

//lista unificada para o loop
const alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "Bruno", nota: 5 },
    { nome: "Carlos", nota: 7 },
    { nome: "Daniela", nota: 4 },
    { nome: "Eduardo", nota: 9 },
    { nome: "Fernanda", nota: 5.5 }
]

for (let i = 0; i < 6; i++) {
    if (notas[i] >= 7) {
        console.log(nomes[i] + " passou")
    } else {
        console.log(nomes[i] + " recuperação")
    }
}