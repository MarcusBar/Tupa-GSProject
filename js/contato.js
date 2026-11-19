
//Segue a mesma lógica da cadastro.js

function enviarContato() {
  // Coletando dados dos campos
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let assunto = document.getElementById("assunto").value;
  let mensagem = document.getElementById("mensagem").value;

  let temErro = false;

  // Limpando os avisos
  document.getElementById("erro-nome").innerHTML = "";
  document.getElementById("erro-email").innerHTML = "";
  document.getElementById("erro-assunto").innerHTML = "";
  document.getElementById("erro-mensagem").innerHTML = "";
  document.getElementById("aviso").hidden = true;

  // Conferir cada campo
  if (nome.length < 3) {
    document.getElementById("erro-nome").innerHTML = "O nome precisa ter pelo menos 3 letras.";
    temErro = true;
  }

  if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
    document.getElementById("erro-email").innerHTML = "Digite um e-mail válido, como nome@exemplo.com.";
    temErro = true;
  }

  if (assunto.length < 3) {
    document.getElementById("erro-assunto").innerHTML = "O assunto precisa ter pelo menos 3 letras.";
    temErro = true;
  }

  if (mensagem.length < 10) {
    document.getElementById("erro-mensagem").innerHTML = "A mensagem precisa ter pelo menos 10 caracteres.";
    temErro = true;
  }

  // Mostrar resultado caso os dados estejam verificados
  if (temErro == false) {
    document.getElementById("aviso").innerHTML = "Mensagem enviada, " + nome + "! Responderemos em breve. (Envio de exemplo)";
    document.getElementById("aviso").hidden = false;
  }
}
