const { readFileSync } = require('fs');
var Repositorio = require("./repositorio.js");
const { formatarMoeda } = require('./utils.js');
var ServicoCalculoFatura = require("./servico.js") ;
const {gerarFaturaStr} = require("./apresentacao.js");


// Comente a função gerarFaturaHTML e sua chamada
// function gerarFaturaHTML(fatura, calc) {
//   let faturaHTML = `<html>\n<p> Fatura ${fatura.cliente} </p>\n<ul>\n`;
//   for (let apre of fatura.apresentacoes) {
//     faturaHTML += `  <li> ${calc.repo.getPeca(apre).nome}: ${formatarMoeda(calc.calcularTotalApresentacao(apre))} (${apre.audiencia} assentos) </li>\n`;
//   }
//   faturaHTML += `</ul>\n<p> Valor total: ${formatarMoeda(calc.calcularTotalFatura(fatura.apresentacoes))} </p>\n`;
//   faturaHTML += `<p> Créditos acumulados: ${calc.calcularTotalCreditos(fatura.apresentacoes)} </p>\n</html>`;
//   return faturaHTML;
// }

const faturas = JSON.parse(readFileSync('./faturas.json'));

const calc = new ServicoCalculoFatura(new Repositorio());
const faturaStr = gerarFaturaStr(faturas, calc);
console.log(faturaStr);

// Comente a chamada da função gerarFaturaHTML
// const faturaHTML = gerarFaturaHTML(faturas, calc);
// console.log(faturaHTML);
