const form = document.getElementById('customForm');
const respostasList = document.getElementById('respostasList');

// Carrega respostas do localStorage ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
  const respostas = JSON.parse(localStorage.getItem('respostas')) || [];
  respostas.forEach(exibirResposta);
});

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = new FormData(form);
  const respostaObj = {};

  // Coleta todos os campos dinamicamente
  formData.forEach((value, key) => {
    respostaObj[key] = value;
  });

  // Salva no localStorage
  const respostas = JSON.parse(localStorage.getItem('respostas')) || [];
  respostas.push(respostaObj);
  localStorage.setItem('respostas', JSON.stringify(respostas));

  exibirResposta(respostaObj);
  form.reset();
});

function exibirResposta(resposta) {
  const li = document.createElement('li');
  li.innerHTML = Object.entries(resposta)
    .map(([key, value]) => `<strong>${key}:</strong> ${value}`)
    .join('<br>');
  respostasList.appendChild(li);
}
