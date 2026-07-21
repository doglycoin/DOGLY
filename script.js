/* =====================================
   DOGLYCOIN MODERN SLIDER & ANIMATIONS
===================================== */

const images = [
  "images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg",
  "images/5.jpg", "images/6.jpg", "images/7.jpg", "images/8.jpg",
  "images/9.jpg", "images/10.jpg", "images/11.jpg", "images/12.jpg",
  "images/13.jpg", "images/14.jpg", "images/15.jpg", "images/16.jpg",
  "images/17.jpg", "images/18.jpg", "images/19.jpg", "images/20.jpg"
];

let currentImage = 0;
const sliderImage = document.getElementById("slider-image");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

function updateImage(index) {
  if (!sliderImage) return;
  sliderImage.style.opacity = "0.2";
  sliderImage.style.transform = "scale(0.96)";

  setTimeout(() => {
    sliderImage.src = images[index];
    sliderImage.style.opacity = "1";
    sliderImage.style.transform = "scale(1)";
  }, 200);
}

if (nextBtn && prevBtn) {
  nextBtn.onclick = () => {
    currentImage = (currentImage + 1) % images.length;
    updateImage(currentImage);
  };

  prevBtn.onclick = () => {
    currentImage = (currentImage - 1 + images.length) % images.length;
    updateImage(currentImage);
  };

  // Auto transition every 4 seconds
  setInterval(() => {
    currentImage = (currentImage + 1) % images.length;
    updateImage(currentImage);
  }, 4000);
}
