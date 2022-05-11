function laranja() {
  document.getElementById("estadio").src = "img/setor_laranja.png";
}
function azul() {
  document.getElementById("estadio").src = "img/setor_azul.png";
}

function vermelha() {
  document.getElementById("estadio").src = "img/setor_vermelho.png";
}

function amarelo() {
  document.getElementById("estadio").src = "img/setor_amarelo.png";
}

var area = "none";

function metrotrem() {
  document.getElementById("metrotrem").style.display = "block";

  document.getElementById("onibus").style.display = "none";

  document.getElementById("carro").style.display = "none";
}
function onibus() {
  document.getElementById("metrotrem").style.display = "none";

  document.getElementById("onibus").style.display = "block";

  document.getElementById("carro").style.display = "none";
}
function carro() {
  document.getElementById("metrotrem").style.display = "none";

  document.getElementById("onibus").style.display = "none";

  document.getElementById("carro").style.display = "block";
}
var visibilidade = true;
{
}
function exibir() {
  document.getElementById("metrotrem").style.display = "block";
}
function ocultar() {
  document.getElementById("metrotrem").style.display = "none";
}
function exibir() {
  document.getElementById("onibus").style.display = "block";
}
function ocultar() {
  document.getElementById("onibus").style.display = "none";
}
function exibir() {
  document.getElementById("carro").style.display = "block";
}
function ocultar() {
  document.getElementById("carro").style.display = "none";
}
