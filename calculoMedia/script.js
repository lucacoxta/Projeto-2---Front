function criarInputsNotas() {
  const qtd = parseInt(document.getElementById('qtdMaterias').value);
  const container = document.getElementById('notasContainer');
  container.innerHTML = '';
  if (isNaN(qtd) || qtd < 1 || qtd > 10) {
    alert('Digite um número entre 1 e 10');
    return;
  }
  for (let i = 1; i <= qtd; i++) {
    const input = document.createElement('input');
    input.type = 'number';
    input.min = 0;
    input.max = 10;
    input.placeholder = `Nota ${i}`;
    container.appendChild(input);
  }
  document.getElementById('resultado').textContent = '';
}

function calcularMedia() {
  const inputs = document.querySelectorAll('#notasContainer input[type="number"]');
  if (inputs.length === 0) {
    alert('Confirme a quantidade de matérias primeiro.');
    return;
  }
  let soma = 0;
  for (const input of inputs) {
    const val = parseFloat(input.value);
    if (isNaN(val) || val < 0 || val > 10) {
      alert('Preencha todas as notas corretamente (0 a 10).');
      return;
    }
    soma += val;
  }
  const media = soma / inputs.length;
  const resultado = document.getElementById('resultado');
  resultado.textContent = `Média: ${media.toFixed(2)}`;
}

function limparCampos() {
  document.getElementById('qtdMaterias').value = '';
  document.getElementById('notasContainer').innerHTML = '';
  document.getElementById('resultado').textContent = '';
}

function voltarInicio() {
  window.location.href = '../index.html';
}
