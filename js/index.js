function simularNivel() {

  //Pegar a quantidade de Lixo e o resultado dela

  let nivel = document.getElementById("nivel-lixeira").value;
  let resultado = document.getElementById("resultado-simulador");

  if (nivel == "" || nivel < 0 || nivel > 100) {
    resultado.className = "simulador-resultado estado-cheia";
    resultado.innerHTML = "Digite um número de 0 a 100.";
    document.getElementById("medidor").value = 0;
    return;
  }

  document.getElementById("medidor").value = nivel;

  //Mostrar o status da Lixeira
  if (nivel >= 80) {
    resultado.className = "simulador-resultado estado-cheia";
    resultado.innerHTML = "<strong>" + nivel + "%</strong> · Cheia, coletar agora";
  } else if (nivel > 50) {
    resultado.className = "simulador-resultado estado-quase-cheia";
    resultado.innerHTML = "<strong>" + nivel + "%</strong> · Quase cheia, coleta programada";
  } else {
    resultado.className = "simulador-resultado estado-vazia";
    resultado.innerHTML = "<strong>" + nivel + "%</strong> · Vazia, sem coleta por enquanto";
  }
}
