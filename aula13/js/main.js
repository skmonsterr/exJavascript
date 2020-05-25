function carregar() {
  var msg = document.getElementById("msg");
  var img = document.getElementById("imagem");
  var data = new Date();
  var horaAtual = data.getHours();
  //var horaAtual = 8;
  msg.innerHTML = `Agora são ${horaAtual} horas.`;
  if (horaAtual >= 0 && horaAtual < 12) {
    img.scr = "img/manha250.png";
    //bom dia
  } else if (horaAtual >= 12 && horaAtual < 18) {
    img.scr = "img/tarde250.png";
    //boa tardes
  } else {
    img.scr = "img/noite250.png";
    //boa noite
  }
}
