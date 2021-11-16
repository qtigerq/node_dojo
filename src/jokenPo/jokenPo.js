const jokenPo = (jogada1, jogada2) => {
    if (jogada1 == jogada2){                    //JOGADAS IGUAIS - EMPATE
        return 'empate';
    } else if (jogada1 == 'pedra') {            //JOGADOR 1 LANÇA PEDRA
        if (jogada2 == 'papel'){                  //JOGADOR 2 LANÇA PAPEL
            return "jogador 2";
        } else {                                  //JOGADOR 2 LANÇA TESOURA
            return "jogador 1"          
        }
    } else if (jogada1 == 'papel'){             //JOGADOR 1 LANÇA PAPEL
        if (jogada2 == 'tesoura'){                //JOGADOR 2 LANÇA TESOURA
            return "jogador 2";
        } else {                                  //JOGADOR 2 LANÇA PEDRA
            return "jogador 1"          
        }
    } else if (jogada1 == 'tesoura'){           //JOGADOR 1 LANÇA TESOURA
        if (jogada2 == 'pedra'){
            return "jogador 2";                   //JOGADOR 2 LANÇA PEDRA
        } else {
            return "jogador 1";                   //JOGADOR 2 LANÇA PAPEL
        }
    }
}

export {jokenPo}