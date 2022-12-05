//Fornecimento do XML para o cliente
xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET","xml/conteudo.xml",false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;
var xml_texto = xmlDoc.getElementsByTagName("texto");
var xml_imagem = xmlDoc.getElementsByTagName("imagem");
var xml_postagem_blog = xmlDoc.getElementsByTagName("postagem");

function mostrarImagem1(){
    document.write("<img src='imgs/" + xml_imagem[0].childNodes[0].nodeValue + "' class='d-inline-block' width='72' height='72'>");
}
function mostrarTexto1(){
    document.write(xml_texto[0].childNodes[0].nodeValue);
}

function mostrarImagem2(){
    document.write("<img src='imgs/" + xml_imagem[1].childNodes[0].nodeValue + "' class='d-block w-100' alt='...'></img>")
}

function mostrarImagem3(){
    document.write("<img src='imgs/" + xml_imagem[2].childNodes[0].nodeValue + "' class='d-block w-100' alt='...'></img>")
}

function mostrarImagem4(){
    document.write("<img src='imgs/" + xml_imagem[3].childNodes[0].nodeValue + "' class='d-block w-100' alt='...'></img>")
}

function mostrarTexto2(){
    document.write(xml_texto[1].childNodes[0].nodeValue);
}

function mostrarTexto3(){
    document.write(xml_texto[2].childNodes[0].nodeValue);
}

function mostrarTexto4(){
    document.write(xml_texto[3].childNodes[0].nodeValue);
}

function mostrarImagem5(){
    document.write("<img class='img-responsive rounded' src='imgs/" + xml_imagem[4].childNodes[0].nodeValue + "' width='100%'>")
}

function mostrarImagem6(){
    document.write("<img class='img-responsive rounded' src='imgs/" + xml_imagem[5].childNodes[0].nodeValue + "' width='100%'>")
}

function mostrarTexto5(){
    document.write(xml_texto[4].childNodes[0].nodeValue);
}

function mostrarImagem7(){
    document.write("<img class='card-img-top' src='imgs/" + xml_imagem[6].childNodes[0].nodeValue + "' alt='Card image cap'>")
}

function mostrarTexto6(){
    document.write(xml_texto[5].childNodes[0].nodeValue);
}

function mostrarImagem8(){
    document.write("<img class='card-img-top' src='imgs/" + xml_imagem[7].childNodes[0].nodeValue + "' alt='Card image cap'>")
}

function mostrarTexto7(){
    document.write(xml_texto[6].childNodes[0].nodeValue);
}

function mostrarImagem9(){
    document.write("<img class='card-img-top' src='imgs/" + xml_imagem[8].childNodes[0].nodeValue + "' alt='Card image cap'>")
}

function mostrarTexto8(){
    document.write(xml_texto[7].childNodes[0].nodeValue);
}

function mostrarTexto9(){
    document.write(xml_texto[8].childNodes[0].nodeValue);
}

function mostrarImagem10(){
    document.write("<img src='imgs/" + xml_imagem[9].childNodes[0].nodeValue + "' class='d-block w-100' alt='...'>");
}

function mostrarTexto10(){
    document.write(xml_texto[9].childNodes[0].nodeValue);
}

function mostrarImagem11(){
    document.write("<img src='imgs/" + xml_imagem[10].childNodes[0].nodeValue + "' class='d-block w-100' alt='...'>");
}

function mostrarTexto11(){
    document.write(xml_texto[10].childNodes[0].nodeValue);
}

function mostrarImagem12(){
    document.write("<img src='imgs/" + xml_imagem[11].childNodes[0].nodeValue + "' class='d-block w-100' alt='...'>");
}

function mostrarTexto12(){
    document.write(xml_texto[11].childNodes[0].nodeValue);
}

function mostrarTexto13(){
    document.write(xml_texto[12].childNodes[0].nodeValue);
}

function mostrarImagem13(){
    document.write("<img src='imgs/" + xml_imagem[12].childNodes[0].nodeValue + "' class='d-block w-100' alt='...'>");
}

function mostrarTexto14(){
    document.write(xml_texto[13].childNodes[0].nodeValue);
}

function mostrarImagem14(){
    document.write("<img src='imgs/" + xml_imagem[13].childNodes[0].nodeValue + "' class='d-block w-100' alt='...'>");
}

function mostrarTexto15(){
    document.write(xml_texto[14].childNodes[0].nodeValue);
}

function mostrarImagem15(){
    document.write("<img src='imgs/" + xml_imagem[14].childNodes[0].nodeValue + "' class='d-block w-100' alt='...'>");
}

function mostrarTexto16(){
    document.write(xml_texto[15].childNodes[0].nodeValue);
}

function mostrarTexto17(){
    document.write(xml_texto[16].childNodes[0].nodeValue);
}

function mostrarTexto18(){
    document.write(xml_texto[17].childNodes[0].nodeValue);
}

function mostrarBlog(){
    for(i = 0; i < xml_postagem_blog.length; i++){
    document.write(
        "<div class='row py-md-5 my-md-0 px-md-2 border'>" +
            "<div class='col-md-3 col-12 py-md-2 py-3 h3'>" +
            "<a class='text-decoration-none' href='blog.html?codigo_postagem=" + i + "'>" + xml_postagem_blog[i].getElementsByTagName("titulo-blog")[0].childNodes[0].nodeValue + "</a>" +
            "</div>" +
            "<div class='col-md-4 col-12 py-md-0 py-4'>" +
            "<img class='rounded'src='imgs/"+ xml_postagem_blog[i].getElementsByTagName("imagem-blog")[0].childNodes[0].nodeValue +"' width='375'></img>" +
            "</div>" +
            "<div class='col-md-5 col-12 py-md-0 my-md-0 px-5 my-4 py-4 h5'>" +
            xml_postagem_blog[i].getElementsByTagName("conteudo-blog")[0].childNodes[0].nodeValue.substr(0,400) + "... " +
            "<a class='text-decoration-none' href='blog.html?codigo_postagem=" + i + "'>(Leia mais)</a>"+
            "</div>" +
        "</div>"
    )
    };
}

function mostrarPostagem(){
    url = new URL(window.location.href);
    parametro = url.searchParams;
    i = parametro.get("codigo_postagem");
    document.write(
        "<div class='row d-flex px-2 my-4'>" +
          "<div id='title-text-color' class='d-flex col-6 col-md-12 justify-content-center h2'>" +
          xml_postagem_blog[i].getElementsByTagName("titulo-blog")[0].childNodes[0].nodeValue +
          "</div>" +
        "</div>" +
  
        "<div class='container'>" +
           "<img class='img-responsive rounded' src='imgs/" + xml_postagem_blog[i].getElementsByTagName("imagem-blog")[0].childNodes[0].nodeValue + "' width='100%'>" +
           "<br><br><br><br>" +
           "<a class='h4 text-decoration-none text-light'>" + xml_postagem_blog[i].getElementsByTagName("conteudo-blog")[0].childNodes[0].nodeValue + "</a>" +
        "</div>"
    );
}

function mostrarImagem16(){
    document.write("<img class='bi me-2' src='imgs/" + xml_imagem[15].childNodes[0].nodeValue + "' width='160' height='135'>")
}

function mostrarTexto19(){
    document.write(xml_texto[18].childNodes[0].nodeValue);
}

function mostrarTexto20(){
    document.write(xml_texto[19].childNodes[0].nodeValue);
}

function mostrarTexto21(){
    document.write(xml_texto[20].childNodes[0].nodeValue);
}

function mostrarTexto22(){
    document.write(xml_texto[21].childNodes[0].nodeValue);
}

function mostrarTexto23(){
    document.write(xml_texto[22].childNodes[0].nodeValue);
}

function mostrarTexto24(){
    document.write(xml_texto[23].childNodes[0].nodeValue);
}

function mostrarTexto25(){
    document.write(xml_texto[24].childNodes[0].nodeValue);
}

function mostrarTexto26(){
    document.write(xml_texto[25].childNodes[0].nodeValue);
}

function mostrarTexto27(){
    document.write(xml_texto[26].childNodes[0].nodeValue);
}

function mostrarTexto28(){
    document.write(xml_texto[27].childNodes[0].nodeValue);
}