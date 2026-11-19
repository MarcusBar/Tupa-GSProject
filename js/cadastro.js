
//Segue a mesma lógica da contato.js

function cadastrar() {

  // Coletando dados dos campos
  let nome = document.getElementById("nome").value;
  let cpf = document.getElementById("cpf").value;
  let telefone = document.getElementById("telefone").value;

  let temErro = false;

  // Limpando os avisos
  document.getElementById("erro-nome").innerHTML = "";
  document.getElementById("erro-cpf").innerHTML = "";
  document.getElementById("erro-telefone").innerHTML = "";
  document.getElementById("aviso").hidden = true;

  if (nome.length < 5 || nome.indexOf(" ") == -1) {
    document.getElementById("erro-nome").innerHTML = "Digite o nome e o sobrenome.";
    temErro = true;
  }

  if (cpf.length != 11 || isNaN(cpf)) {
    document.getElementById("erro-cpf").innerHTML = "O CPF precisa ter 11 números, sem pontos nem traço.";
    temErro = true;
  }

  if (telefone.length < 10 || telefone.length > 11 || isNaN(telefone)) {
    document.getElementById("erro-telefone").innerHTML = "Digite o DDD e o número, só com números. Ex.: 11999999999";
    temErro = true;
  }

  // Mostrar resultado caso os dados estejam verificados
  if (temErro == false) {
    document.getElementById("aviso").innerHTML = "Cadastro concluído, " + nome + "! Agora você já pode relatar ocorrências. (Cadastro de exemplo)";
    document.getElementById("aviso").hidden = false;
  }
}
