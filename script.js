/* =====================================
   DOGLYCOIN WEBSITE SCRIPT
===================================== */

// Smooth Navigation
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if(target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Header Effect
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  if(window.scrollY > 80) {
    header.style.background = "rgba(255,255,255,.96)";
    header.style.boxShadow = "0 10px 30px rgba(0,0,0,.12)";
  } else {
    header.style.background = "rgba(255,255,255,.90)";
    header.style.boxShadow = "none";
  }
});

// =============================
// Gallery Slider (Original Smooth Style)
// =============================
const images = [
  "images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg",
  "images/5.jpg", "images/6.jpg", "images/7.jpg", "images/8.jpg",
  "images/9.jpg", "images/10.jpg", "images/11.jpg", "images/12.jpg",
  "images/13.jpg", "images/14.jpg", "images/15.jpg", "images/16.jpg",
  "images/17.jpg", "images/18.jpg", "images/19.jpg", "images/20.jpg"
];

let currentImage = 0;
const slider = document.getElementById("slider-image");

function showImage() {
  if(slider) {
    slider.src = images[currentImage];
  }
}

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

if(nextBtn) {
  nextBtn.onclick = () => {
    currentImage++;
    if(currentImage >= images.length) { currentImage = 0; }
    showImage();
  };
}

if(prevBtn) {
  prevBtn.onclick = () => {
    currentImage--;
    if(currentImage < 0) { currentImage = images.length - 1; }
    showImage();
  };
}

// Auto Slider
setInterval(() => {
  currentImage++;
  if(currentImage >= images.length) { currentImage = 0; }
  showImage();
}, 4000);

/* =====================================
   REVEAL ANIMATION
===================================== */
const revealElements = document.querySelectorAll(
  ".about,.tokenomics,.roadmap,.gallery,.partners,.faq,.token-card,.road-card,.partner-card,.faq-item"
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.15 });

revealElements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = "all .8s ease";
  observer.observe(el);
});

/* =====================================
   CARD HOVER EFFECT
===================================== */
document.querySelectorAll(
  ".token-card,.road-card,.partner-card,.faq-item"
).forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-12px) scale(1.03)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) scale(1)";
  });
});

/* =====================================
   HERO IMAGE EFFECT
===================================== */
const heroImg = document.querySelector(".hero-image img");
if(heroImg) {
  heroImg.addEventListener("mouseenter", () => {
    heroImg.style.transform = "scale(1.05) rotate(3deg)";
  });
  heroImg.addEventListener("mouseleave", () => {
    heroImg.style.transform = "scale(1) rotate(0deg)";
  });
}

/* =====================================
   BUTTON EFFECT
===================================== */
document.querySelectorAll(".buttons a").forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "translateY(-5px)";
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translateY(0)";
  });
});

/* =====================================
   PAGE LOADED
===================================== */
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
  console.log("🚀 DOGLYCOIN Website Loaded Successfully");
});
