const verificarLetraChutada = require('./verificarLetraChutada')

class Forca {
  letraChutada = [];
  resultadoVerificacao = {letrasAcertadas: [], vidasRestantes: 6, ganhou: false, perdeu: false};

  constructor(palavraSecreta) {
    this.palavraSecreta = "abacaxi";
  }

  chutar(letra) {
    if (letra.length == 1) {
      if (this.letraChutada.length == 0) {
        this.letraChutada.push(letra);
            this.resultadoVerificacao = verificarLetraChutada(letra, this.palavraSecreta, this.resultadoVerificacao.letrasAcertadas, this.resultadoVerificacao.vidasRestantes);
      } else {
        this.letraChutada.filter((letra) => {
          if (letra !== letra) {
            this.letraChutada.push(letra);
            this.resultadoVerificacao = verificarLetraChutada(letra, this.palavraSecreta, this.resultadoVerificacao.letrasAcertadas, this.resultadoVerificacao.vidasRestantes);
          }
        })
      }
      
      
    }
  }
   
  buscarEstado() { 
    let resultado = "";

    if (this.resultadoVerificacao.ganhou === true && this.resultadoVerificacao.perdeu === false) {
      resultado = "ganhou";
    } else if (this.resultadoVerificacao.ganhou === false && this.resultadoVerificacao.perdeu === true) {
      resultado = "perdeu";
    } else {
      resultado = "aguardando chute";
    }

    return resultado; 
  
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
    let letraChutada = this.letraChutada;
    let palavra = this.resultadoVerificacao.letrasAcertadas;
    let vidasRestantes = this.resultadoVerificacao.vidasRestantes;

      return {
          letrasChutadas: letraChutada, // Deve conter todas as letras chutadas
          vidas: vidasRestantes, // Quantidade de vidas restantes
          palavra: palavra // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }
  }
}

module.exports = Forca;
