function jogar() {
    let idade = prompt("Quantos anos você tem?");
    if (idade < 18) {
        alert("Você não pode jogar este jogo.");
        return; // Para sair da função se a idade for menor que 18
    } 

    let escolhaJogador = prompt("Digite 1-Pedra, 2-Papel ou 3-Tesoura");
    let escolhaComputador = Math.floor(Math.random() * 3) + 1;

    // jogador e pc jogam a mesma coisa
    if (escolhaJogador == escolhaComputador) {
        alert("Empate!");
    }

    // jogador pedra, pc papel = pc venceu
    if (escolhaJogador == 1) {
        if (escolhaComputador == 2) {
            alert("Computador venceu, escolheu papel");
        }
        if (escolhaComputador == 3) {
            // jogador pedra, pc tesoura = jogador vence
            alert("Jogador venceu, escolheu pedra");
        }
    }

    // jogador papel, pc pedra = jogador vence  
    if (escolhaJogador == 2) {
        if (escolhaComputador == 1) {
            alert("Jogador venceu, escolheu papel");
        }
        if (escolhaComputador == 3) {
            // jogador papel, pc tesoura = pc vence
            alert("Computador venceu, escolheu tesoura");
        }
    }

    // jogador tesoura, pc pedra = pc venceu
    if (escolhaJogador == 3) {
        if (escolhaComputador == 1) {
            alert("Computador venceu, escolheu pedra");
        }
        if (escolhaComputador == 2) {
            // jogador tesoura, pc papel = jogador vence
            alert("Jogador venceu, escolheu tesoura");
        }
    }

    alert("escolhaComputador: " + escolhaComputador);
}
