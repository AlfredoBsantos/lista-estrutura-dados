function reverterFila(fila) {
    if (fila.length === 0) return;
  
    let item = fila.shift();
    reverterFila(fila);
    fila.push(item);
  }
  
  // Exemplo:
  let fila = [1, 2, 3, 4, 5];
  reverterFila(fila);
  console.log(fila); // [5, 4, 3, 2, 1]
  