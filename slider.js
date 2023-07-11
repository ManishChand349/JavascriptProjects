const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");

let sliderNumber = 1;
const length = images.length;

const nextSlide = () => {
  slider.style.transform = `translateX(-${sliderNumber * 500}px)`;
  sliderNumber++;
};
const prevSlide = () => {
  slider.style.transform = `translateX(-${(sliderNumber-2) * 500}px)`;
  sliderNumber--;
};

const getFirstSlider = () => {
  slider.style.transform = `translateX(0px)`;
  sliderNumber = 1;
};
const getLastSlider = () => {
  slider.style.transform = `translateX(-${(length-1) * 500}px`;
  sliderNumber = 1;
};

right.addEventListener("click", () => {
  sliderNumber < length ? nextSlide() : getFirstSlider();
});

left.addEventListener("click", ()=>{
     sliderNumber > 1 ? prevSlide() : getLastSlider()

})

