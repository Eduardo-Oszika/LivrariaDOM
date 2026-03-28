
var livrosXML = new XMLHttpRequest();
livrosXML.open("GET", "../livros.xml", false);
livrosXML.send();

var DOM = livrosXML.responseXML;

var titulos = DOM.getElementsByTagName("titulo");

var divTitulos = document.getElementById("titulos");

console.log(titulos);

for (var i = 0; i < titulos.length; i++) {
    var titulo = titulos[i].childNodes[0].nodeValue;
    console.log(titulo);
    var p = document.createElement("p");
    p.textContent = titulo;
    divTitulos.appendChild(p);
}