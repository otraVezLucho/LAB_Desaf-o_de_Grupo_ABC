function randomColor() {
  const letras = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letras[Math.floor(Math.random() * 16)];
  }
  return color;
}
// Cambia tres colores aleatorios (texto, fondo y borde)
function changeColors(element) {
  const color1 = randomColor();
  const color2 = randomColor();
  const color3 = randomColor();

  element.style.color = color1;
  element.style.backgroundColor = color2;
  element.style.border = `4px solid ${color3}`;
}
function changeBack(){
    document.getElementById("body").style.background = "linear-gradient(45deg, #47dcf3ff, #c8e974ff)"; 
}
