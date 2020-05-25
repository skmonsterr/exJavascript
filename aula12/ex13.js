var horaAtual = new Date();
var hora = horaAtual.getHours();
console.log(`Agora são exatamente ${hora} horas`);

if (hora > 4 && hora < 12) {
  console.log("Bom Dia!");
} else if (hora <= 4 && hora >= 0) {
  console.log("Boa Madrugada!");
} else if (hora <= 18) {
  console.log("Boa Tarde!");
} else {
  console.log("Boa Noite!");
}
