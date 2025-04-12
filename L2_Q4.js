function intercalarFilas(f1, f2) {
    const resultado = [];
    let i = 0;
  
    while (i < f1.length || i < f2.length) {
      if (i < f1.length) resultado.push(f1[i]);
      if (i < f2.length) resultado.push(f2[i]);
      i++;
    }
  
    return resultado;
  }
  
  // Exemplo:
  const fila1 = [1, 3, 5];
  const fila2 = [2, 4, 6];
  console.log(intercalarFilas(fila1, fila2)); // [1, 2, 3, 4, 5, 6]
  