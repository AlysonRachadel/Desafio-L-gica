document.getElementById('btnNumeroRepetido').addEventListener('click', function () {
  NumeroRepetidomsg();
});

function NumeroRepetido(arr) {
  const mapa = new Map();
  const numerosRepetidos = [];

  for (const num of arr) {
      mapa.set(num, (mapa.get(num) || 0) + 1);
  }

  for (const [num, contagem] of mapa.entries()) {
      if (contagem !== 3) {
          numerosRepetidos.push(num);
      }
  }

  return numerosRepetidos;
}

function NumeroRepetidomsg() {
  const entrada = [5, 3, 4, 3, 5, 5, 3, 2, 1];
  const resultado = NumeroRepetido(entrada);

  if (resultado.length > 0) {
      let mensagem = "Números repetidos menos de 3 vezes encontrados:\n";
      resultado.forEach(num => {
          mensagem += `${num}\n`;
      });
      alert(mensagem);
  } else {
      alert("Não foram encontrados números repetidos menos de 3 vezes.");
  }
}
