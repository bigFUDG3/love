const mensagens = [
    "Eu te amo, meu amorzinho!",
    "Você é tudo pra mim!",
    "Você me faz tão bem",
    "Estou com tantas saudades!",
    "Meu coração é seu!",
    "Não vejo a hora de te ver de novo!!!",
  ];

function alterarMensagem() {
    const mensagemElement = document.getElementById('mensagem');
    const mensagemAtual = mensagemElement.textContent;
    let novaMensagem = mensagemAtual;
    while (novaMensagem === mensagemAtual) {
        novaMensagem = mensagens[Math.floor(Math.random() * mensagens.length)];
    }
    mensagemElement.textContent = novaMensagem;
}
setInterval(alterarMensagem, 3000);