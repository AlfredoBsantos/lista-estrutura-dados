class CaminhaoQueue {
    constructor(maximo = 10) {
      this.fila = [];
      this.maximo = maximo;
    }
  
    chegada(nome) {
      if (this.fila.length < this.maximo) {
        this.fila.push(nome);
        console.log(`${nome} entrou na fila.`);
      } else {
        console.log("Limite de caminhões atingido.");
      }
    }
  
    saida() {
      if (this.fila.length > 0) {
        const nome = this.fila.shift();
        console.log(`${nome} foi carregado e saiu da fila.`);
      } else {
        console.log("Nenhum caminhoneiro na fila.");
      }
    }
  
    temCaminhoneiros() {
      return this.fila.length > 0;
    }
  
    limiteAtingido() {
      return this.fila.length >= this.maximo;
    }
  
    listarCaminhoes() {
      console.log("Caminhoneiros na fila:");
      this.fila.forEach((nome, i) => {
        console.log(`${i + 1}. ${nome}`);
      });
    }
  }
  