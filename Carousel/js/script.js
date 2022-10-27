const slides = document.querySelectorAll(".slide");
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

let curSlide = 0;
const nextSlideBtn = document.querySelector(".btn-next");
const prevSlideBtn = document.querySelector(".btn-prev");

const nextSlide =  function () {
  curSlide===slides.length-1?curSlide=0:curSlide++;  
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
}

nextSlideBtn.addEventListener("click",nextSlide);

prevSlideBtn.addEventListener("click", () => {
  curSlide===0 ? curSlide = slides.length - 1 : curSlide--;
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

setInterval(()=>{
   nextSlide()
},1000);