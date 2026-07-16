// Smooth scrolling
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Header background on scroll
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.background = "rgba(8,15,35,0.95)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.35)";
    } else {
        header.style.background = "rgba(10,15,35,.85)";
        header.style.boxShadow = "none";
    }
});

// Reveal animation
const items = document.querySelectorAll(
".about,.tokenomics,.roadmap,.gallery,.faq,.token-card,.road-card,.faq-item"
);

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{threshold:0.15});

items.forEach(item=>{

item.style.opacity="0";
item.style.transform="translateY(40px)";
item.style.transition="all .8s ease";

observer.observe(item);

});

// Gallery click effect
document.querySelectorAll(".gallery img").forEach(img=>{

img.addEventListener("click",()=>{

img.style.transform="scale(1.1)";

setTimeout(()=>{

img.style.transform="scale(1)";

},300);

});

});

console.log("🚀 DOGLYCOIN Website Loaded Successfully");
