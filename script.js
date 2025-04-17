const images = document.querySelectorAll(".images img");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modalImg");
const close = document.querySelector(".close");
const imgCaption = document.getElementById("imgCaption");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn")


images.forEach((image, index) => {
      image.addEventListener("click", () => {
            modalImg.src = image.src;
            imgCaption.innerHTML = image.alt;
            modal.classList.add("appear");
            let current = index;
            let next = current + 1;
            let prev = current - 1;
            prevBtn.addEventListener("click", () =>{
                  modalImg.src =images[prev].src;
                  imgCaption.innerHTML =images[prev].alt
                  prev--;
                  next = prev + 2;
            });
            nextBtn.addEventListener("click", () => {
                  modalImg.src = images[next].src;
                  imgCaption.innerHTML = images[next].alt;
                  next++;
                  prev = next - 2;
            });
            close.addEventListener("click", () => {
                  modal.classList.remove("appear");
            })
      })
});
