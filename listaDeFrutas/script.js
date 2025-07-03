const frutas = [];

function adicionarFruta() {
  const input = document.getElementById('frutaInput');
  const fruta = input.value.trim();
  if (fruta === '') {
    alert('Digite o nome de uma fruta');
    return;
  }
  frutas.push(fruta);
  atualizarLista();
  input.value = '';
  input.focus();
}

function atualizarLista() {
  const lista = document.getElementById('listaFrutas');
  lista.textContent = `[ ${frutas.join(', ')} ]`;
}

function voltarInicio() {
  window.location.href = '../index.html';
}
