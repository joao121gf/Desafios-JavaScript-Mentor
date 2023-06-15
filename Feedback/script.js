const numeros = document.querySelectorAll("span");

function ativaLaranja() {
  if (this.classList.contains("ativoLaranja")) {
    this.classList.remove("ativoLaranja");
  } else {
    numeros.forEach((n) => {
      n.classList.remove("ativoLaranja");
    });
    this.classList.add("ativoLaranja");
  }
}

numeros.forEach((nums) => {
  nums.addEventListener("click", ativaLaranja);
});
