var livrosXML = new XMLHttpRequest();
livrosXML.open("GET", "../livros.xml", false);
livrosXML.send();

var DOM = livrosXML.responseXML;

var livro = DOM.getElementsByTagName("livro")[DOM.getElementsByTagName("livro").length - 1];

console.log(livro.childNodes);

var ultimofilho = livro.lastChild;
console.log(ultimofilho);
var ano = ultimofilho.firstChild;
console.log(ano);


var texto = ano.nodeValue;

var divAno = document.getElementById("ultimo-ano")
var p = document.createElement("p");
p.textContent = texto;
divAno.appendChild(p);