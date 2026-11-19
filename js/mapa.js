// Dados de exemplo: a posição 0 de cada lista é a mesma lixeira
let nomes = [
  "Largo da Batata",
  "Terminal Bandeira",
  "Av. Paulista, Bela Vista",
  "Estação da Luz",
  "Feira da Liberdade",
  "Praça da Sé",
  "Mercado Municipal",
  "Rua 25 de Março",
  "Terminal Parque Dom Pedro II"
];

let niveis = [41, 85, 92, 30, 63, 55, 72, 18, 12]; //Niveis das Lixeiras
let selecionada = -1; // -1 quer dizer "nenhuma lixeira escolhida"

function filtrarMapa(filtro){
  
  if(filtro == "todas"){
    document.getElementById("vazia").style.display = '';
    document.getElementById("quase-cheia").style.display = '';
    document.getElementById("cheia").style.display = '';
  }else if(filtro == "vazia"){
    document.getElementById("vazia").style.display = '';
    document.getElementById("quase-cheia").style.display = 'none';
    document.getElementById("cheia").style.display = 'none';
    
  }else if(filtro == "quase-cheia"){
    document.getElementById("vazia").style.display = 'none';
    document.getElementById("quase-cheia").style.display = '';
    document.getElementById("cheia").style.display = 'none';
    
  }else if(filtro == "cheia"){
    document.getElementById("vazia").style.display = 'none';
    document.getElementById("quase-cheia").style.display = 'none';
    document.getElementById("cheia").style.display = '';
  }
}

function descobrirEstado(nivel) {
  if (nivel >= 80) {
    return "cheia";
  } else if (nivel >= 50) {
    return "quase-cheia";
  } else {
    return "vazia";
  }
}

function descobrirRotulo(estado) {
  if (estado == "cheia") {
    return "Cheia";
  } else if (estado == "quase-cheia") {
    return "Quase cheia";
  } else {
    return "Vazia";
  }
}

function atualizarMapa() {
  let total = nomes.length;
  let vazias = 0;
  let quaseCheias = 0;
  let cheias = 0;

  for (let i = 0; i < nomes.length; i++) {
    let estado = descobrirEstado(niveis[i]);

    // Conta quantas lixeiras há em cada estado
    if (estado == "vazia") {
      vazias = vazias + 1;
    } else if (estado == "quase-cheia") {
      quaseCheias = quaseCheias + 1;
    } else {
      cheias = cheias + 1;
    }
  }

  document.getElementById("total-todas").innerHTML = total;
  document.getElementById("total-vazia").innerHTML = vazias;
  document.getElementById("total-quase-cheia").innerHTML = quaseCheias;
  document.getElementById("total-cheia").innerHTML = cheias;
}

/* ----- Ao clicar em uma lixeira do mapa ----- */

function mostrarLixeira(numero) {
  selecionada = numero;

  let nivel = niveis[numero];
  let estado = descobrirEstado(nivel);

  document.getElementById("detalhe").innerHTML =
    "<h2>Detalhes da lixeira</h2>" +
    "<h3>" + nomes[numero] + "</h3>" +
    "<span class='selo estado-" + estado + "'>" + descobrirRotulo(estado) + "</span>" +
    "<meter min='0' max='100' low='50' high='80' optimum='0' value='" + nivel + "'></meter>" +
    "<p>Nível do sensor: " + nivel + "%</p>";
}


function gerarRota() {
  document.getElementById("resultado-rota").innerHTML = "*Rota Gerada*";
  document.getElementById("limpar-rota").disabled = false;
}

function limparRota() {
  document.getElementById("resultado-rota").innerHTML = "";
  document.getElementById("limpar-rota").disabled = true;
}

/* ----- Cadastro de nova lixeira (exemplo) ----- */

function cadastrarLixeira() {
  let nome = document.getElementById("nome-lixeira").value;
  let nivel = document.getElementById("nivel-inicial").value;
  let temErro = false;

  document.getElementById("erro-nome-lixeira").innerHTML = "";
  document.getElementById("erro-nivel-inicial").innerHTML = "";
  document.getElementById("aviso").hidden = true;

  if (nome.length < 3) {
    document.getElementById("erro-nome-lixeira").innerHTML = "Informe o nome ou endereço da lixeira.";
    temErro = true;
  }

  if (nivel == "" || nivel < 0 || nivel > 100) {
    document.getElementById("erro-nivel-inicial").innerHTML = "O nível deve ficar entre 0 e 100.";
    temErro = true;
  }

  if (temErro == false) {
    document.getElementById("aviso").innerHTML = "Lixeira \"" + nome + "\" cadastrada com nível " + nivel + "%. (Exemplo: no site de verdade ela apareceria no mapa)";
    document.getElementById("aviso").hidden = false;
  }
}