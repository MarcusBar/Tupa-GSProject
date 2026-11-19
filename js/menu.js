const cabecalho = document.getElementById("cabecalho");
const botaoMenu = document.getElementById("botao-menu");

function alternarMenu() {
  const menuAberto = cabecalho.classList.toggle("menu-aberto");

  botaoMenu.setAttribute("aria-expanded", menuAberto);
}

if (botaoMenu && cabecalho) {
  if (!botaoMenu.hasAttribute("onclick")) {
    botaoMenu.addEventListener("click", alternarMenu);
  }
}
