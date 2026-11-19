const perguntas = document.querySelectorAll(".faq-pergunta");
const itens = document.querySelectorAll(".faq-item");

const pesquisa = document.getElementById("pesquisa-faq");
const contador = document.getElementById("faq-contador");
const mensagemVazia = document.getElementById("faq-vazio");

function fecharPergunta(pergunta) {
  const idResposta = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(idResposta);
  const item = pergunta.closest(".faq-item");
  const icone = pergunta.querySelector(".faq-icone");

  pergunta.setAttribute("aria-expanded", "false");

  resposta.hidden = true;

  item.classList.remove("aberto");

  icone.textContent = "+";
}

function abrirPergunta(pergunta) {
  const idResposta = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(idResposta);
  const item = pergunta.closest(".faq-item");
  const icone = pergunta.querySelector(".faq-icone");

  pergunta.setAttribute("aria-expanded", "true");

  resposta.hidden = false;

  item.classList.add("aberto");

  icone.textContent = "−";
}

perguntas.forEach(function (pergunta) {
  pergunta.addEventListener("click", function () {
    const estavaAberta = pergunta.getAttribute("aria-expanded") === "true";

    perguntas.forEach(function (outraPergunta) {
      fecharPergunta(outraPergunta);
    });

    if (!estavaAberta) {
      abrirPergunta(pergunta);
    }
  });
});

function normalizarTexto(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function filtrarPerguntas() {
  const termo = normalizarTexto(pesquisa.value);

  let quantidade = 0;

  itens.forEach(function (item) {
    const texto = normalizarTexto(item.textContent);

    const encontrou = texto.includes(termo);

    item.hidden = !encontrou;

    if (encontrou) {
      quantidade++;
    } else {
      const pergunta = item.querySelector(".faq-pergunta");

      fecharPergunta(pergunta);
    }
  });

  contador.textContent = quantidade + " perguntas encontradas";

  mensagemVazia.hidden = quantidade !== 0;
}

pesquisa.addEventListener("input", filtrarPerguntas);

filtrarPerguntas();
