var livrosXML = new XMLHttpRequest();
livrosXML.open("GET", "livros.xml", false);
livrosXML.send();

var DOM = livrosXML.responseXML;

var livro = DOM.getElementsByTagName('livro')[0];

var filhoTitulo = livro.firstChild;
var irmaoAutor = filhoTitulo.nextSibling;
var autor = irmaoAutor.firstChild;
var texto = autor.nodeValue;

var divAutor = document.getElementById("primeiro-autor")

var p = document.createElement("p");

p.textContent = texto;

divAutor.appendChild(p);