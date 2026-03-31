const xmlString = `
<biblioteca>
    <livro categoria="ficcao">
        <titulo>O Guia do Mochileiro das Galáxias</titulo>
        <autor>Douglas Adams</autor>
    </livro>
    <livro categoria="tecnico">
        <titulo>Introdução ao XML</titulo>
        <autor>Professor Exemplo</autor>
    </livro>
</biblioteca>`;

const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, "text/xml");

const segundoLivroTitulo = xmlDoc.getElementsByTagName("titulo")[1];
const valorTexto = segundoLivroTitulo.childNodes[0].nodeValue;

console.log(valorTexto);

for (let i = 0; i < xmlDoc.childNodes.length; i++) {
    const node = xmlDoc.childNodes[i];
    if (node.nodeType === 1) {
        console.log(node.nodeName);
        if (node.childNodes.length > 0) {
            for (let j = 0; j < node.childNodes.length; j++) {
                const childNode = node.childNodes[j];
                if (childNode.nodeType === 1) {
                    console.log("   " + childNode.nodeName);
                    if (childNode.childNodes.length > 0) {
                        for (let k = 0; k < childNode.childNodes.length; k++) {
                            const grandChildNode = childNode.childNodes[k];
                            if (grandChildNode.nodeType === 1) {
                                console.log("       " + grandChildNode.nodeName);
                            }
                        }
                    }
                }
            }
        }
    }
}