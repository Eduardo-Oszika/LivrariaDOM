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

const precoNode = xmlDoc.getElementsByTagName("preco")[0];
precoNode.childNodes[0].nodeValue = "3.00";

const precoAtualizado = xmlDoc.getElementsByTagName("preco")[0].childNodes[0].nodeValue;
console.log("Preço atualizado: " + precoAtualizado);