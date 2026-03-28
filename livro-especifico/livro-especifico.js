
var livrosXML = new XMLHttpRequest();
livrosXML.open("GET", "../livros.xml", false);
livrosXML.send();

var DOM = livrosXML.responseXML;

var livro = DOM.getElementsByTagName('livro')[0];

var id = livro.getAttribute('id');

var titulo = livro.getElementsByTagName('titulo')[0];
var autor = livro.getElementsByTagName('autor')[0];
var ano = livro.getElementsByTagName('ano')[0];

var divLivro = document.getElementById("livro-especifico");

var p = document.createElement("p");

var texto = "ID: " + id + ", Título: " + titulo.childNodes[0].nodeValue + ", Autor: " + autor.childNodes[0].nodeValue + ", Ano: " + ano.childNodes[0].nodeValue;

p.textContent = texto;
divLivro.appendChild(p);
