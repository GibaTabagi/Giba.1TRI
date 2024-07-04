const botoes = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".abas-conteudo");
const tempo = document.querySelectorAll(.contador);
const tempoObjetivo1 new Date(2024, 7, 29);
const tempoObjetivo2 new Date(2024, 8, 29);
const tempoObjetivo3 new Date(2024, 9, 29);
const tempoObjetivo4 new Date(2024, 10, 29);

let segundos;
let minutos;
let horas; 
let dias;

let segundos2;
let minutos2;
let horas2; 
let dias2;

let segundos3;
let minutos3;
let horas3; 
let dias3;

let segundos4;
let minutos4;
let horas4; 
let dias4;

const agora = new Date();
tempo[0].textContent = tempoObjetivo1 - agora;
segundos = (tempoObjetivo - agora)/1000;
minutos = segundos/60;
horas = minutos /60;
dias = horas/24;

segundos = Math.floor(segundos);
minutos = Math.floor(minutos);
horas = Math.floor(horas);
dias = Math.floor(dias);

tempo[0].textContent = 'faltam ${dias}', dias, ${horas}, horas, ${minutos}, minutos e ${segundos} segundos'

console.log(tempo);
console.log(botoes);
for (let i = 0; i <  botoes.length; i++) {
    botoes[i].onclick = function() {
        for (let j = 0;j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            conteudo[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo")
       conteudo[i].classList.add("ativo")
    }
}
