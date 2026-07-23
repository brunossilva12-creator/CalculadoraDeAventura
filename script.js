function enigma(){

    let sequencia = prompt("Descubra a sequência de cartas corretas, sendo elas Ouro(1), Espadas(2), Copas(3) e Paus(4). Digite dica para uma pista");
    if(sequencia == "1342"){
        alert("Parabéns, você acertou");
    }
    else if(sequencia == "dica"){
        alert("Cores diferentes não se misturam, a força nunca vem no começo, a parte boa da aventura é sempre o meio dela");
    }
     else if(sequencia != "1342"){
        alert("Que pena, você errou, ninguém disse que seria fácil");
    }
}

function reparar(){
    alert("Resolva a questão matemática para concertar o gerador, cuidado, prete atenção no enunciado")
    let resultado = prompt("Entre os números 2, o 3 e o 91 qual o [Unidade de algarismo!!!] mais próximo do número[nada]");
    if(resultado == "91"){
        alert("Resultado [Não é a primeira tentativa sua!!!] correto, o número 91, é o mais próximo de um [Algarismo 0!!!], no 90, o gerador se concertou após [Medo do usuário teste!!!]")
    }
    else if(resultado == "2"){
        alert("Resultado [Absolutamente previsível!!!] lógica correta, infelizmente geradores não se concertam com [Enigmas de escola!!!]");
    }
    else if (resultado == "3"){
        alert("Resultado [Teste de respostas!!!] você quer [testar o que acontece!?!], o gerador não está respondendo [Nada acontece!!!]")
    }
    else{
        alert("O gerador [Entrou em choque com sua resposta!!!] Você ficou [Chocado!!!], você acabou [Indo ao paraíso!!!]");
    }
}

function governante(){
    alert("Defenda seu reino, não deixe seu rei ser derrotado! Escolha a unidade certa para o inimigo certo");

    let unidade = prompt("O arqueiro inimigo esta próximo, qual dos nossos deve atacar? (Opções: cavaleiro, arqueiro e rei)");

    if(unidade == "cavaleiro"){
        alert("Seu cavaleiro vence o arqueiro exposto, muito bem");
        let bifurcacao1 = prompt("Seu cavaleiro está exposto, quem deve protege-lo?(Opções: arqueiro ou rei)");
        
        if(bifurcacao1 == "arqueiro"){
            alert("Cobertura bem sucedida, o rei caiu, você venceu (Final Bom, pra você...)");
        }
        else if(bifurcacao1 == "rei"){
            alert("Você expõe seu rei, isso leva a sua derrota para os inimigos (Final derrota desnecessaria)")
        }
    }
    else if (unidade == "arqueiro"){
        alert("O arqueiro inimigo atinge seu arqueiro e foge, unidade perdida");
        let bifurcacao2 = prompt("O arqueiro avança contra seu rei, qual sua ação?")
        if(bifurcacao2 == "cavaleiro"){
            alert("Seu cavaleiro elimina o arqueiro inimigo, você sobreviveu, por enquanto...(Final paranóia)")
        }
        else if(bifurcacao2 == "Rei"){
            alert("Seu rei pode atacar e se defender, você conseguiu, porém seu cavaleiro foi levado (Final governante de nada)")
        }
    }
    else if(unidade == "rei"){
        alert("Sozinho no campo, derrotado o arqueiro");
        let bifurcacao3 = prompt("Os inimigos avançam e você recua, quem você manda os combater? (Cavaleiro ou arqueiro?)");
        if(bifurcacao3 == "Cavaleiro"){
            alert("Seu cavaleiro derrota todos, porém seu poder o consome, ele rouba seu lugar, vai ser uma estadia longa na prisão... (Final traição)");
        }
        else if(bifurcacao3 == "arqueiro"){
            alert("Após o ataque de seu arqueiro, os inimigos se instalaram ao redor do seu reino, acumulando tropas, na espera de uma chance... (Final vigia inútil)");
        }
    }
}

