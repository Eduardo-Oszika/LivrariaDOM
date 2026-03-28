var livrosXML = new XMLHttpRequest();
livrosXML.open("GET", "../livros.xml", false);
livrosXML.send();

var DOM = livrosXML.responseXML;
var autores = DOM.getElementsByTagName("autor");
var anos = DOM.getElementsByTagName("ano");

var divAutoresAno = document.getElementById("autores-anos");

for (var i = 0; i < autores.length; i++) {
    var autor = autores[i].childNodes[0].nodeValue;
    var ano = anos[i].childNodes[0].nodeValue;

    var p = document.createElement("p");

    var texto = "Autor: " + autor + ", Ano: " + ano;

    p.textContent = texto;
    divAutoresAno.appendChild(p);
}