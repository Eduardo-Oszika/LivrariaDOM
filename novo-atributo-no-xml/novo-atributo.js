const xmlString = `
<catalogo>
    <produto id="A45">
        <nome>Caneta Azul</nome>
        <preco>2.50</preco>
        <estoque>150</estoque>
    </produto>
</catalogo>`;

const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, "text/xml");

const produto = xmlDoc.getElementsByTagName("produto")[0];
produto.setAttribute("moeda", "BRL");

const moeda = produto.getAttribute("moeda");
console.log("Moeda do produto: " + moeda);