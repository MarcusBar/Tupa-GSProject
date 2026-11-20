//Função para pegar o dia de hoje
function preencherData() {
  let hoje = new Date();
  let dia = hoje.getDate();
  let mes = hoje.getMonth() + 1;
  let ano = hoje.getFullYear();

  if (dia < 10) {
    dia = "0" + dia;
  }
  if (mes < 10) {
    mes = "0" + mes;
  }

  document.getElementById("data").value = dia + "/" + mes + "/" + ano;
}

preencherData();

function enviarOcorrencia() {
  // 1. Pegar o que a pessoa digitou
  let data = document.getElementById("data").value;
  let tipo = document.getElementById("tipo").value;
  let local = document.getElementById("local").value;
  let descricao = document.getElementById("descricao").value;

  // O texto da opção escolhida (e não o value dela)
  let campoTipo = document.getElementById("tipo");
  let textoDoTipo = campoTipo.options[campoTipo.selectedIndex].text;

  let temErro = false;

  // 2. Limpar os erros e o aviso de antes
  document.getElementById("erro-tipo").innerHTML = "";
  document.getElementById("erro-local").innerHTML = "";
  document.getElementById("erro-descricao").innerHTML = "";
  document.getElementById("aviso").hidden = true;

  // 3. Conferir cada campo
  if (tipo == "") {
    document.getElementById("erro-tipo").innerHTML = "Escolha o tipo de ocorrência.";
    temErro = true;
  }

  // Para lixeira danificada ou cheia, o local é obrigatório
  if ((tipo == "lixeira-danificada" || tipo == "lixeira-cheia") && local == "") {
    document.getElementById("erro-local").innerHTML = "Informe qual é a lixeira (endereço ou nome).";
    temErro = true;
  }

  if (descricao.length < 10) {
    document.getElementById("erro-descricao").innerHTML = "A descrição precisa ter pelo menos 10 caracteres.";
    temErro = true;
  }

  // 4. Se tudo estiver certo, mostrar o resultado
  if (temErro == false) {
    let detalhes = data;
    if (local != "") {
      detalhes = detalhes + " · " + local;
    }

    // Coloca a nova ocorrência no começo da lista "Suas ocorrências"
    let lista = document.getElementById("lista-ocorrencias");
    lista.innerHTML = "<li><h3>" + textoDoTipo + "</h3><p class='ocorrencia-detalhes'>" + detalhes + "</p><p>" + descricao + "</p></li>" + lista.innerHTML;

    document.getElementById("vazio").hidden = true;
    document.getElementById("aviso").innerHTML = "Ocorrência enviada! (Envio de exemplo)";
    document.getElementById("aviso").hidden = false;

    // Limpa os campos para um novo relato
    document.getElementById("tipo").value = "";
    document.getElementById("local").value = "";
    document.getElementById("descricao").value = "";
  }
}
