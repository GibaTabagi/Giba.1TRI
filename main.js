const botoes = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".aba-conteudo");
const tempo= document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date(20)
const tempoObjetivo2 = new Date(10)
const tempoObjetivo3 = new Date(05)
const tempoObjetivo4 = new Date(60)
const agora= new date ();
let segundo;
segundo=(tempoObjetivo1-agora)/1000
let minuto;
minuto=segundo/60
let horas;
horas=minutos/60
let dias;
dias=horas/24
tempo[0].textContent = tempoObjetivo1-agora
for(let i = 0; 1 < botoes.length ; i++){
    botoes[i].onclick = function() {
        for (j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
            conteudo[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo")
        conteudo[i].classList.add("ativo")
    }
}
