var livrosXML = new XMLHttpRequest();
livrosXML.open("GET", "../livros.xml", false);
livrosXML.send();

var DOM = livrosXML.responseXML;
var livros = DOM.getElementsByTagName("livro");

var autorNode = livros[1].getElementsByTagName("autor")[0];
var livro = autorNode.parentNode;
var titulo = livro.firstChild;
var divNavegar = document.getElementById("navegacao");
var p = document.createElement("p");
var texto = "Título: " + titulo.childNodes[0].nodeValue;

p.textContent = texto;

divNavegar.appendChild(p);