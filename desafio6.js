function sequenciaFibonacci(n) {
  const sequencia = [1, 1];

  for (let i = 2; i < n; i++) {
      sequencia[i] = sequencia[i - 1] + sequencia[i - 2];
  }

  return sequencia;
}

function sequenciaFibonaccimsg() {
  const entrada = 6;
  const resultado = sequenciaFibonacci(entrada);

  if (resultado.length > 0) {
      let mensagem = "Sequência Fibonacci gerada:\n";
      resultado.forEach(num => {
          mensagem += `${num}\n`;
      });
      alert(mensagem);
  } else {
      alert("Não foi possível gerar a sequência Fibonacci.");
  }
}

document.getElementById('sequenciaFibonacciBtn').addEventListener('click', function () {
  sequenciaFibonaccimsg();
});