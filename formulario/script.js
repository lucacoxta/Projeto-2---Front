const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = document.getElementById('valor1').value.trim();
  const idade = document.getElementById('valor2').value.trim();
  const telefone = document.getElementById('valor3').value.trim();
  const email = document.getElementById('valor4').value.trim();
  const endereco = document.getElementById('valor5').value.trim();

  if (!nome || !idade || !telefone || !email || !endereco) {
    alert('Preencha todos os campos!');
    return;
  }

  const conteudo = 
    `Nome: ${nome}\n` +
    `Idade: ${idade}\n` +
    `Telefone: ${telefone}\n` +
    `E-mail: ${email}\n` +
    `Endereço: ${endereco}\n`;

  const blob = new Blob([conteudo], { type: 'text/plain;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'dados_formulario.txt';
  link.click();
  URL.revokeObjectURL(link.href);
});

function limparFormulario() {
  formulario.reset();
}

function voltarInicio() {
  window.location.href = '../index.html';
}
