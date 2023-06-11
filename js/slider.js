const sliderContainer = document.querySelector(".slider-container");
const prevArrow = document.querySelector(".prev-arrow");
const nextArrow = document.querySelector(".next-arrow");

prevArrow.addEventListener("click", slidePrev);
nextArrow.addEventListener("click", slideNext);

function slidePrev() {
  sliderContainer.appendChild(sliderContainer.firstElementChild);
}

function slideNext() {
  sliderContainer.prepend(sliderContainer.lastElementChild);
}
