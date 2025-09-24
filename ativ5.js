//1) exerci
var numero = -44;
if (numero >= 0) {
    console.log("".concat(numero, " \u00E9 positivo."));
}
else {
    console.log("".concat(numero, " \u00E9 negativo."));
}
//2) exerci
var valor = 44;
if (valor % 2 === 0) {
    console.log("".concat(valor, " \u00E9 par."));
}
else {
    console.log("".concat(valor, " \u00E9 \u00EDmpar."));
}
//3) exerci
var idadE = 20;
if (idadE >= 18) {
    console.log("Maior de idade.");
}
else {
    console.log("Menor de idade.");
}
//4) exerci
var nota = 8;
if (nota >= 6) {
    console.log("Aluno aprovado.");
}
else {
    console.log("Aluno reprovado.");
}
//5) exerci
var idade = 20;
if (idade < 12) {
    console.log("Criança");
}
else if (idade < 18) {
    console.log("Adolescente");
}
else if (idade < 60) {
    console.log("Adulto");
}
else {
    console.log("Idoso");
}
//6) exerc
var materia = "Matemática";
var notaFinal = 8;
var faltas = 12;
if (notaFinal >= 7 && faltas <= 10) {
    console.log("Aprovado em ".concat(materia, "."));
}
else {
    console.log("Reprovado em ".concat(materia, "."));
}
//7) exerc
var usuario = "admin";
var senha = "1234";
if (usuario === "admin" && senha === "1234") {
    console.log("Login realizado com sucesso!");
}
else {
    console.log("Usuário ou senha inválidos.");
}
//8) exerc
var idadeCliente = 65;
if (idadeCliente >= 60) {
    console.log("Cliente tem direito a desconto.");
}
else {
    console.log("Cliente não tem desconto.");
}
//9) exerc
var senhaNova = "40028922";
if (senhaNova.length >= 8) {
    console.log("Senha forte.");
}
else {
    console.log("Senha fraca. Deve ter 8 ou mais caracteres.");
}
//10) exerc
var a = 44;
var b = 22;
if (a > b) {
    console.log("".concat(a, " \u00E9 maior que ").concat(b, "."));
}
else if (b > a) {
    console.log("".concat(b, " \u00E9 maior que ").concat(a, "."));
}
else {
    console.log("Os números são iguais.");
}
//11) exerc
var dia = 6; // 1=Segunda ... 7=Domingo
if (dia >= 1 && dia <= 5) {
    console.log("Dia útil.");
}
else if (dia === 6 || dia === 7) {
    console.log("Final de semana.");
}
else {
    console.log("Número inválido para dia.");
}
//12) exerc
var notaAluno = 82;
if (notaAluno >= 90) {
    console.log("Conceito A");
}
else if (notaAluno >= 80) {
    console.log("Conceito B");
}
else if (notaAluno >= 70) {
    console.log("Conceito C");
}
else if (notaAluno >= 60) {
    console.log("Conceito D");
}
else {
    console.log("Conceito F");
}
//13) exerc
var temperatura = 28;
if (temperatura < 15) {
    console.log("Está frio.");
}
else if (temperatura <= 25) {
    console.log("Clima agradável.");
}
else {
    console.log("Está quente.");
}
//14) exerc
var lado1 = 5;
var lado2 = 7;
var lado3 = 10;
if (lado1 < lado2 + lado3 &&
    lado2 < lado1 + lado3 &&
    lado3 < lado1 + lado2) {
    console.log("Forma um triângulo válido.");
}
else {
    console.log("Não forma um triângulo.");
}
