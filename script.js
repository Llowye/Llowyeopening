const loader = document.getElementById("leafLoader");
const main = document.getElementById("mainContent");

const left = document.querySelector(".leftLeaves");
const right = document.querySelector(".rightLeaves");

// Kunci scroll saat opening
document.body.style.overflow = "hidden";

// Tunggu sebentar supaya daun sempat bergoyang
setTimeout(() => {

    left.classList.add("open");
    right.classList.add("open");

}, 400);

// Munculkan konten
setTimeout(() => {

    main.classList.add("show");

}, 1800);

// Hapus loader
setTimeout(() => {

    loader.style.opacity = "0";
    loader.style.transition = "0.6s ease";

    setTimeout(() => {

        loader.remove();
        document.body.style.overflow = "auto";

    }, 600);

}, 2400);

// Hover glow untuk tombol OPEN
const openBtn = document.querySelector(".openBtn");

openBtn.addEventListener("mouseenter", () => {
    openBtn.style.boxShadow = "0 0 35px rgba(255,0,0,.8)";
});

openBtn.addEventListener("mouseleave", () => {
    openBtn.style.boxShadow = "none";
});

// Hover ikon musik
const musicBtn = document.querySelector(".musicBtn");

musicBtn.addEventListener("mouseenter", () => {
    musicBtn.style.transform = "scale(1.15) rotate(12deg)";
});

musicBtn.addEventListener("mouseleave", () => {
    musicBtn.style.transform = "scale(1) rotate(0deg)";
});

// Efek klik tombol
document.querySelectorAll("a").forEach(btn => {

    btn.addEventListener("click", function () {

        this.style.transform = "scale(.92)";

        setTimeout(() => {
            this.style.transform = "";
        }, 120);

    });

});
