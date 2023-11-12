function numerosSomazero() {
  const entrada = [-1, 0, 1, 2, -1, -4, 4];
  const resultado = SomaZero(entrada);

  if (resultado.length > 0) {
    let mensagem = "Números consecutivos que somam zero :\n";


    resultado.forEach(numsomazero => {
      mensagem += `(${numsomazero[0]}, ${numsomazero[1]}, ${numsomazero[2]})\n`;

    });
    alert(mensagem);
  } else {
    alert("Não foram encontradas números consecutivos que somam zero")
  }
}

/* A Utilização de "${}" é para que facilite a leitura do código, e a lógica também. 
   Caso não utilizasse essa expressão, teria que concatenar os valores utilizando '+' o que iria dificultar a leitura e gerar possíveis erros de código
   */

function SomaZero(lista) {
  const arr = [];
  const n = lista.length;

  //Verificação se a soma é zero

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        if (lista[i] + lista[j] + lista[k] === 0) {
          arr.push([lista[i], lista[j], lista[k]]);
        }
      }
    }
  }

  return arr;
}
document.getElementById('btnnumerosconsecutivos').addEventListener('click', function () {
  numerosSomazero();
});