let paulo = {
    nome: "Paulo",
    vitorias: 2,
    empates: 5,
    derrotas: 1,
    pontos: 0
}

let rafa = {
    nome: "Rafa",
    vitorias: 3,
    empates: 5,
    derrotas: 2,
    pontos: 0
}

console.log(rafa)
 rafa.pontos = calculaPontos(rafa)
 paulo.pontos = calculaPontos(paulo)

function calculaPontos(jogador) {
    var pontos = (jogador.vitorias * 3) + jogador.empates
    return pontos
}

var jogadores = [rafa, paulo]

exibirJogadoresNaTela(jogadores)

function exibirJogadoresNaTela(jogadores) {
    var html = ""
    for (var i = 0; i < jogadores.length; i++){
        html += "<tr><td>" + jogadores[i].nome + "</td>"
        html += "<td>" + jogadores[i].vitorias + "</td>"
        html += "<td>" + jogadores[i].empates + "</td>"
        html += "<td>" + jogadores[i].derrotas + "</td>"
        html += "<td>" + jogadores[i].pontos + "</td></tr>"
    }
    var tabelaJogadores = document.getElementById("tabelaJogadores")
    tabelaJogadores.innerHTML = html 
}
