// Exemplo 1: Calculadora de Média
function abrirCalcMedia() {
  const div = document.getElementById('conteudo');
  div.innerHTML = `
    <h2>Calculadora de Média</h2>
    <label for="qtdMaterias">Quantidade de matérias (máx. 10):</label>
    <input type="number" id="qtdMaterias" min="1" max="10" />
    <div style="margin: 10px 0;">
      <button onclick="criarInputsNotas()">Confirmar</button>
    </div>
    <div id="notasContainer"></div>
    <div style="margin-top: 15px;">
      <button onclick="calcularMedia()">Calcular Média</button>
      <button onclick="limparCampos()">Limpar Tudo</button>
    </div>
    <p id="resultado" style="font-weight: bold; margin-top: 20px;"></p>
  `;

  window.criarInputsNotas = function () {
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
      input.style.width = '60px';
      input.style.margin = '3px';
      container.appendChild(input);
    }
    document.getElementById('resultado').textContent = '';
  };

  window.calcularMedia = function () {
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
    document.getElementById('resultado').textContent = `Média: ${media.toFixed(2)}`;
  };

  window.limparCampos = function () {
    document.getElementById('qtdMaterias').value = '';
    document.getElementById('notasContainer').innerHTML = '';
    document.getElementById('resultado').textContent = '';
  };
}

// Exemplo 2: Formulário com TXT
function abrirFormulario() {
  const div = document.getElementById('conteudo');
  div.innerHTML = `
    <h2>Formulário</h2>
    <form id="formulario">
      <input type="text" id="valor1" placeholder="Nome" required /><br />
      <input type="number" id="valor2" placeholder="Idade" required /><br />
      <input type="text" id="valor3" placeholder="Telefone" required /><br />
      <input type="text" id="valor4" placeholder="E-mail" required /><br />
      <input type="text" id="valor5" placeholder="Endereço" required /><br />
      <button type="submit"><i class="fas fa-save"></i> Salvar em TXT</button>
    </form>
    <div style="margin-top: 10px;">
      <button onclick="limparFormulario()">Limpar</button>
    </div>
    <p id="mensagem" style="margin-top: 15px; font-weight: bold; color: green;"></p>
  `;

  const formulario = document.getElementById('formulario');
  formulario.addEventListener('submit', function (e) {
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

    const conteudoTxt = 
      `Nome: ${nome}\n` +
      `Idade: ${idade}\n` +
      `Telefone: ${telefone}\n` +
      `E-mail: ${email}\n` +
      `Endereço: ${endereco}\n`;

    const blob = new Blob([conteudoTxt], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'dados_formulario.txt';
    link.click();
    URL.revokeObjectURL(link.href);

    document.getElementById('mensagem').textContent = 'Arquivo salvo com sucesso!';
  });

  window.limparFormulario = function () {
    formulario.reset();
    document.getElementById('mensagem').textContent = '';
  };
}

// Exemplo 3: Manipulação de Frutas
function abrirListaFrutas() {
  const div = document.getElementById('conteudo');
  div.innerHTML = `
    <h2>Manipulação de Frutas</h2>
    <input type="text" id="frutaInput" placeholder="Digite uma fruta" />
    <button id="btnAdicionar"><i class="fas fa-plus"></i> Adicionar</button>
    <p id="listaFrutas" style="margin-top: 15px; font-size: 18px;">[ ]</p>
  `;

  const frutas = [];
  const inputFruta = document.getElementById('frutaInput');
  const btnAdicionar = document.getElementById('btnAdicionar');
  const listaFrutas = document.getElementById('listaFrutas');

  btnAdicionar.onclick = function () {
    const fruta = inputFruta.value.trim();
    if (fruta === '') {
      alert('Digite o nome de uma fruta');
      return;
    }
    frutas.push(fruta);
    listaFrutas.textContent = `[ ${frutas.join(', ')} ]`;
    inputFruta.value = '';
    inputFruta.focus();
  };
}
