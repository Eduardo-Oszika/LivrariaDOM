var livrosXML = new XMLHttpRequest();
livrosXML.open("GET", "../livros.xml", false);
livrosXML.send();
var DOM = livrosXML.responseXML;

var livros = DOM.getElementsByTagName("livro");
var divIDs = document.getElementById("ids");

for (var i = 0; i < livros.length; i++) {
    var idNO = livros[i].getAttribute('id');
    var p = document.createElement("p");
    p.textContent = idNO;
    divIDs.appendChild(p);
}