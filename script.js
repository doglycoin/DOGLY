/* ==========================================
   DOGLYCOIN WEBSITE
   SCRIPT.JS - PART 1
========================================== */

// ===============================
// Mobile Menu
// ===============================

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        menuToggle.classList.toggle("active");

        nav.classList.toggle("open");

    });

}

// Close menu after click

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        if (nav) nav.classList.remove("open");

        if (menuToggle) menuToggle.classList.remove("active");

    });

});

// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth",

                block:"start"

            });

        }

    });

});

// ===============================
// Header Scroll Effect
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});

// ===============================
// Active Navigation
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 140;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

/* ==========================================
   COUNTDOWN TIMER
========================================== */

// Set your official listing date here
const launchDate = new Date("2026-12-31T18:00:00").getTime();

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function updateCountdown() {

    const now = new Date().getTime();

    const distance = launchDate - now;

    if (distance <= 0) {

        if (daysEl) daysEl.textContent = "00";
        if (hoursEl) hoursEl.textContent = "00";
        if (minutesEl) minutesEl.textContent = "00";
        if (secondsEl) secondsEl.textContent = "00";

        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    if (daysEl) daysEl.textContent = String(days).padStart(2, "0");
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, "0");
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, "0");
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, "0");

}

// Run immediately
updateCountdown();

// Update every second
setInterval(updateCountdown, 1000);

/* ==========================================
   GALLERY SLIDER
========================================== */

const images = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg",
    "images/7.jpg",
    "images/8.jpg",
    "images/9.jpg",
    "images/10.jpg",
    "images/11.jpg",
    "images/12.jpg",
    "images/13.jpg",
    "images/14.jpg",
    "images/15.jpg",
    "images/16.jpg",
    "images/17.jpg",
    "images/18.jpg",
    "images/19.jpg",
    "images/20.jpg"
];

let currentImage = 0;

const sliderImage = document.getElementById("slider-image");
const currentSlide = document.getElementById("current-slide");
const totalSlides = document.getElementById("total-slides");

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const thumbs = document.querySelectorAll(".thumb");

if(totalSlides){
    totalSlides.textContent = images.length;
}

function updateGallery(){

    if(!sliderImage) return;

    sliderImage.style.opacity = "0";

    setTimeout(()=>{

        sliderImage.src = images[currentImage];

        sliderImage.style.opacity = "1";

    },200);

    if(currentSlide){

        currentSlide.textContent = currentImage + 1;

    }

    thumbs.forEach((thumb,index)=>{

        thumb.classList.remove("active");

        if(index === currentImage){

            thumb.classList.add("active");

        }

    });

}

/* Next */

if(nextBtn){

    nextBtn.addEventListener("click",()=>{

        currentImage++;

        if(currentImage >= images.length){

            currentImage = 0;

        }

        updateGallery();

    });

}

/* Previous */

if(prevBtn){

    prevBtn.addEventListener("click",()=>{

        currentImage--;

        if(currentImage < 0){

            currentImage = images.length - 1;

        }

        updateGallery();

    });

}

/* Thumbnail Click */

thumbs.forEach((thumb,index)=>{

    thumb.addEventListener("click",()=>{

        currentImage = index;

        updateGallery();

    });

});

/* Auto Slider */

setInterval(()=>{

    currentImage++;

    if(currentImage >= images.length){

        currentImage = 0;

    }

    updateGallery();

},4000);

updateGallery();

/* ==========================================
   FAQ ACCORDION
========================================== */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector("h3");
    const answer = item.querySelector("p");
    const icon = item.querySelector("i");

    if (answer) {

        answer.style.maxHeight = "0px";
        answer.style.overflow = "hidden";
        answer.style.opacity = "0";
        answer.style.transition =
            "max-height .4s ease, opacity .3s ease";
    }

    question.addEventListener("click", () => {

        faqItems.forEach(other => {

            if (other !== item) {

                const otherAnswer = other.querySelector("p");
                const otherIcon = other.querySelector("i");

                other.classList.remove("active");

                if (otherAnswer) {

                    otherAnswer.style.maxHeight = "0px";
                    otherAnswer.style.opacity = "0";

                }

                if (otherIcon) {

                    otherIcon.classList.remove("fa-minus");
                    otherIcon.classList.add("fa-plus");

                }

            }

        });

        item.classList.toggle("active");

        if (item.classList.contains("active")) {

            answer.style.maxHeight = answer.scrollHeight + "px";
            answer.style.opacity = "1";

            if (icon) {

                icon.classList.remove("fa-plus");
                icon.classList.add("fa-minus");

            }

        } else {

            answer.style.maxHeight = "0px";
            answer.style.opacity = "0";

            if (icon) {

                icon.classList.remove("fa-minus");
                icon.classList.add("fa-plus");

            }

        }

    });

});

/* ==========================================
   BACK TO TOP BUTTON
========================================== */

const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {

    if (!backToTop) return;

    if (window.scrollY > 500) {

        backToTop.style.opacity = "1";
        backToTop.style.visibility = "visible";
        backToTop.style.transform = "translateY(0)";

    } else {

        backToTop.style.opacity = "0";
        backToTop.style.visibility = "hidden";
        backToTop.style.transform = "translateY(20px)";

    }

});

if (backToTop) {

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/* ==========================================
   SCROLL REVEAL ANIMATION
========================================== */

const revealElements = document.querySelectorAll(

".about-card, .token-card, .distribution-card, .roadmap-card, .partner-card, .faq-item, .feature-card"

);

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{

threshold:.15

});

revealElements.forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(60px)";

el.style.transition="all .8s ease";

observer.observe(el);

});

/* ==========================================
   HERO IMAGE PARALLAX
========================================== */

const heroImage = document.querySelector(".hero-image img");

window.addEventListener("mousemove",(e)=>{

if(!heroImage) return;

const x = (window.innerWidth / 2 - e.clientX) / 40;

const y = (window.innerHeight / 2 - e.clientY) / 40;

heroImage.style.transform =

`translate(${x}px,${y}px)`;

});

/* ==========================================
   PAGE LOADING
========================================== */

window.addEventListener("load",()=>{

document.body.style.opacity="1";

document.body.style.transition="opacity .7s ease";

console.log("🚀 DOGLYCOIN Premium Website Loaded");

});

/* ==========================================
   END OF FILE
========================================== */
