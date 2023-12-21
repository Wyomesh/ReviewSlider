let flag = 0;
slideshow(flag);
const greater = document.querySelector(".next");
greater.addEventListener("click", (e) => {
  flag = flag + 1;
  slideshow(flag);
});
const smaller = document.querySelector(".prev");
smaller.addEventListener("click", (e) => {
  flag = flag - 1;
  slideshow(flag);
});
const surprise = document.querySelector(".btn");
function slideshow(nums) {
  let slides = document.querySelectorAll(".card");
  slides.forEach((element) => {
    element.style.display = "none";
  });
  if (nums === slides.length) {
    flag = 0;
    nums = 0;
  } else if (nums < 0) {
    flag = slides.length - 1;
    nums = slides.length - 1;
  }
  slides[nums].style.display = "block";
}
let slideNo = document.querySelectorAll(".card");
surprise.addEventListener("click", (e) => {
  let random = Math.floor(Math.random() * slideNo.length);
  slideshow(random);
});
