function NumeroUnico(arr) {

// A utilização da função "Map() é para verificar quantas vezes cada número aparece no array"

  const mapa = new Map();
  const numerosUnicos = [];

  for (const num of arr) {
      mapa.set(num, (mapa.get(num) || 0) + 1);
  }

  for (const [num, contagem] of mapa.entries()) {
      if (contagem === 1) {
          numerosUnicos.push(num);
      }
  }

// Nesse laço o código verifica se a contagem do número é igual a 1. Caso seja isso significa que esse número é único, e então ele retorna esses valores. 

  return numerosUnicos;
}

function Numerounicomsg() {
  const entrada = [5, 3, 4, 3, 4, 1, 2];
  const resultado = NumeroUnico(entrada);

  if (resultado.length > 0) {
      let mensagem = "Números únicos encontrados:\n";
      resultado.forEach(num => {
          mensagem += `${num}\n`;
      });
      alert(mensagem);
  } else {
      alert("Não foram encontrados números únicos.");
  }
}

document.getElementById('btnNumeroUnico').addEventListener('click', function () {
  Numerounicomsg();
});