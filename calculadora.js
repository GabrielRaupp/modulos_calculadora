var somar = require("./modulos/somar");
var media = require("./modulos/media");
var multiplicação = require("./modulos/multiplicação");
var divisao = require("./modulos/divisão");
var menos  = require("./modulos/menos");
const naosei = require("./modulos/nome");
var nome = " aqui é o Gabriel";
var nome2 =" como vai";

console.log("calculo de somar: "+somar(40,25));
console.log("calculo de media: "+media(40,25));
console.log("calculo de multiplicação: "+multiplicação(40,25));
console.log("calculo de divisao: "+divisao(40,25));
console.log("calculo de subtração: " +menos(40,25));
console.log(naosei(nome,nome2));


