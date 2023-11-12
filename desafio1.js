function encontrarnumeros(arr) {
  const n = arr.length;
  const numerosFaltantes = [];


  for (let i = 1; i < arr[n - 1]; i++) {
    if (!arr.includes(i)) {
      numerosFaltantes.push(i);
    }
  }

  return "Números faltantes: " + numerosFaltantes;
}

function executar() {
  const arr = [1, 2, 3, 6, 7, 8, 10, 13];
  const resultado = encontrarnumeros(arr);
  alert(resultado);
}

document.getElementById("btnencontrarnumeros").addEventListener("click", executar);
