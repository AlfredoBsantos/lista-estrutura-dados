class Deque {
    constructor() {
      this.items = [];
    }
  
    // ii. Inserir no início
    inserirInicio(elemento) {
      this.items.unshift(elemento);
    }
  
    // iii. Remover do início
    removerInicio() {
      return this.items.shift();
    }
  
    // iv. Inserir no fim
    inserirFim(elemento) {
      this.items.push(elemento);
    }
  
    // v. Remover do fim
    removerFim() {
      return this.items.pop();
    }
  
    mostrar() {
      console.log(this.items);
    }
  }
  