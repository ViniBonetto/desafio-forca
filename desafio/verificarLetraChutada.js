const verificarLetraChutada = (letra, palavraSecreta, letrasAcertadas, vidasRestantes) => {
    let letraChutada = letra.toLowerCase();
    let perdeu = false;
    let ganhou = false;

    if (palavraSecreta.includes(letraChutada)) {
        letrasAcertadas.push(letraChutada);
    } else {
        vidasRestantes = vidasRestantes - 1;

        if (vidasRestantes <= 0) {
            perdeu = true;
            ganhou = false;
        }
    }

    return ({letrasAcertadas: letrasAcertadas, vidasRestantes: vidasRestantes, ganhou: ganhou, perdeu: perdeu});
}

module.exports = verificarLetraChutada;