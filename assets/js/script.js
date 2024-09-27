// desafio 1
const imagen = document.getElementById("jsImagen");

imagen.addEventListener("click", () => {
  imagen.classList.toggle("red-border");
});

// desafio 2

const buttonCalc = document.getElementById("calcular");
buttonCalc.addEventListener("click", () => {
  const sticker1 = parseInt(document.getElementById("sticker1").value);
  const sticker2 = parseInt(document.getElementById("sticker2").value);
  const sticker3 = parseInt(document.getElementById("sticker3").value);
  const total = sticker1 + sticker2 + sticker3;

  const resultado = document.getElementById("resultado");
  if (total <= 10) {
    resultado.textContent = `Llevas ${total} stickers`;
  } else {
    resultado.textContent = "Llevas demasiados stickers";
  }
});

// desafio 3

const buttonPassword = document.getElementById("ingresar");
buttonPassword.addEventListener("click", () => {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  const num3 = document.getElementById("num3").value;
  const password = num1 + num2 + num3;

  const mensaje = document.getElementById("mensaje");
  if (password === "911") {
    mensaje.textContent = "password 1 correcto";
  } else if (password === "714") {
    mensaje.textContent = "password 2 correcto";
  } else {
    mensaje.textContent = "password incorrecto";
  }
});
