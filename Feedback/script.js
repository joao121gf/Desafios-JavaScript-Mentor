window.addEventListener("load", () => {
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

  const button = document.querySelector(".button");
  const containerTy = document.querySelector(".ty");
  const containerBox = document.querySelector('.container-box')
  const load = document.querySelector('.load')


  function openTy() {
    load.style.opacity = '1'
    setTimeout(()=> {
      containerTy.style.opacity = "1";
      containerTy.style.zIndex = '1'
      containerTy.classList.add('active')
      containerBox.style.opacity = '0'
    }, 1500)}



  button.addEventListener("click", openTy);
  console.log(button)
});
