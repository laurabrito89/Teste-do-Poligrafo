let perguntas = [ 
    "Você estava na cena do crime?", 
    "Você conhecia a vítima?", 
    "Você saiu de casa quando ocorreu o crime?", 
    "Você devia dinheiro ou tinha alguma pendência financeira com a vítima?", 
    "Você estava sozinho no horário do crime sem ninguém para confirmar seu paradeiro?", 
    "Você já manuseou o objeto ou a arma utilizada no crime?",
    "Você tentou apagar mensagens, ligações ou dados do seu celular recentemente?",
    "Você teve alguma discussão ou briga séria com a vítima na última semana?",
    "Você pensou em deixar a cidade ou viajar às pressas recentemente?",
    "Você escondeu deliberadamente alguma informação importante da polícia até agora?"
]; 
 
let respostas = []; 
let atual = 0; 
 
mostrarPergunta(); 
 
function mostrarPergunta() { 
    document.getElementById("pergunta").innerHTML = perguntas[atual]; 
    document.getElementById("numero").innerHTML = "Pergunta " + (atual + 
1); 
} 
 
function responder() { 
 
    let resposta = document.getElementById("resposta").value; 
 
    if (resposta == "") { 
        alert("Escolha uma resposta!"); 
        return; 
    } 
 
    respostas[atual] = resposta; 
    atual++; 
 
    document.getElementById("resposta").value = ""; 
 
    if (atual < perguntas.length) { 
        mostrarPergunta(); 
    } else { 
        resultado(); 
    } 
} 
 
function resultado() { 
 
    let pontos = 0; 
 
    if (respostas[0] == "sim") pontos++; 
    if (respostas[1] == "sim") pontos++; 
    if (respostas[2] == "sim") pontos++; 
    if (respostas[3] == "sim") pontos++; 
    if (respostas[4] == "sim") pontos++; 
    if (respostas[5] == "sim") pontos++; 
    if (respostas[6] == "sim") pontos++; 
    if (respostas[7] == "sim") pontos++; 
    if (respostas[8] == "sim") pontos++; 
    if (respostas[9] == "sim") pontos++; 
    if (respostas[10] == "sim") pontos++; 
 
    let mensagem = ""; 
 
    if (pontos < 5){
    mensagem = "Resultado: Inocente: Suas reações indicam que você está dizendo a verdade... Parabéns.";
} else if(pontos == 5){
    mensagem = "Resultado: Suspeito: Notei uma hesitação em suas respostas e pequenos picos de ansiedade... Estaremos de olho em você...";
} else if(pontos >= 6 && pontos <= 8){
    mensagem = "Cúmplice: Seu corpo lhe traiu. As oscilações nos seus batimentos revelam tudo...";
} else {
    mensagem = "Culpado: Um verdadeiro espetáculo de nervosismo! A teia de contradições é evidente em você... Guardas, prendam-no!";
}
 
    document.getElementById("pergunta").innerHTML = mensagem; 
    document.getElementById("numero").innerHTML = "Fim do interrogatório"; 
 
    document.getElementById("resposta").style.display = "none"; 
    document.querySelector("button").style.display = "none"; 
    document.getElementById("reiniciar").style.display = "inline-block"; 
} 
 
function reiniciarJogo() { 
    location.reload(); 
} 