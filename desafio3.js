function somaAlvo(arr, alvo) {
  const resultado = [];

  for (let i = 0; i < arr.length - 2; i++) {
    const soma = arr[i] + arr[i + 1] + arr[i + 2];
    if (soma === alvo) {
      resultado.push([arr[i], arr[i + 1], arr[i + 2]]);
    }
  }

  return resultado;
}

function somaAlvomsg() {
  const entrada = [2, 7, 7, 1, 8, 2, 7, 8, 7];
  const alvo = 16;
  const output = somaAlvo(entrada, alvo);

  if (output.length > 0) {
    let mensagem = "Três números consecutivos com soma alvo encontrados:\n";
    output.forEach(numsomaAlvo => {
      mensagem += `(${numsomaAlvo[0]}, ${numsomaAlvo[1]}, ${numsomaAlvo[2]})\n`;
    });
    alert(mensagem);
  } else {
    alert("Não foram encontrados três números consecutivos com a soma alvo.");
  }
}

document.getElementById('btnsomaAlvo').addEventListener('click', function () {
  somaAlvomsg();
});

