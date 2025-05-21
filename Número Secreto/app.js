let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa

function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1','Jogo do Número Secreto!');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10.');
}

exibirMensagemInicial();
function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', 'Você acertou o número secreto!');
    } else {
        if (chute < numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é maior.');
        } else {
            exibirTextoNaTela('p', 'O número secreto é menor.');
        }
    }
}
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    return numeroEscolhido;
}