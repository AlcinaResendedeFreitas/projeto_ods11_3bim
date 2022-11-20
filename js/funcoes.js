//Fornecimento do XML para o cliente
xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET","xml/conteudo.xml",false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;
var texto_xml = xmlDoc.getElementsByTagName("texto");
var imagem_xml = xmlDoc.getElementsByTagName("imagem");

function mostrarTexto(){
    document.write(texto_xml[1]);
}
