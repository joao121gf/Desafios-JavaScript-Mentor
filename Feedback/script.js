window.addEventListener("load", () => {
  const numeros = document.querySelectorAll(".numeros-box span");

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

  const button = document.querySelector(".button");
  const containerTy = document.querySelector(".ty");
  const containerBox = document.querySelector(".container-box");
  const load = document.querySelector(".load");
  const number = document.querySelector("[data-number]");
  const select = document.querySelector('.correct')



  function openTy() {
    const array = Object.values(numeros)

     const todosComAtivo = array.every((n) =>{
       return !n.classList.contains('ativoLaranja')
     }) 
     if (todosComAtivo){
       select.style.opacity = '1'
     }


    numeros.forEach((n, index) => {
      if (n.classList.contains("ativoLaranja")) {
        select.style.opacity = '0'

        number.innerText = n.innerText;

        load.style.opacity = "1";
        setTimeout(() => {
          containerTy.style.opacity = "1";
          containerTy.style.zIndex = "1";
          containerTy.classList.add("active");
          containerBox.style.opacity = "0";
        }, 1500);
      }
    });
  }

  button.addEventListener("click", openTy);
});
