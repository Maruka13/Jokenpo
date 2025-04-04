function jogar() {
    idade = prompt(Quantos anos você tem?)
    if (idade < 18) {
        alert ("Você não pode jogar este jogo.")
    } 

    if (idade >= 18) {
        escolhaJogador = prompt("Digite 1-Pedra, 2-Papel ou 3-Tesoura")
        escolhaComputador = Math.floor(Math.random() *3) + 1;
    }



    
}

