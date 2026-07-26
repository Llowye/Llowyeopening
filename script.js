const loader=document.getElementById("leafLoader");
const main=document.getElementById("mainContent");

const leafContainer=document.getElementById("leafContainer");

const leafImages=[
"assets/leaf1.png",
"assets/leaf2.png",
"assets/leaf3.png",
"assets/leaf4.png",
"assets/leaf5.png"
];

const leaves=[];
for(let i=0;i<55;i++){

const leaf=document.createElement("div");

leaf.className="leaf";

const img=document.createElement("img");

img.src=leafImages[
Math.floor(Math.random()*leafImages.length)
];

leaf.appendChild(img);

const size=120+Math.random()*170;

leaf.style.width=size+"px";

leaf.style.left=Math.random()*100+"%";

leaf.style.top=Math.random()*100+"%";

leaf.style.transform=`
translate(-50%,-50%)
rotate(${Math.random()*360}deg)
scale(${0.7+Math.random()*0.7})
`;

leaf.dataset.x=Math.random()>0.5?
900+Math.random()*500:
-900-Math.random()*500;

leaf.dataset.y=(Math.random()-0.5)*900;

leaf.dataset.rotate=
Math.random()*900-450;

leafContainer.appendChild(leaf);

leaves.push(leaf);

}
let wind=0;

setInterval(()=>{

wind+=0.03;

leaves.forEach((leaf,index)=>{

const sway=Math.sin(wind+index)*8;

leaf.style.marginTop=sway+"px";

});

},16);
setTimeout(()=>{

leaves.forEach((leaf,i)=>{

setTimeout(()=>{

leaf.style.transform=`
translate(
${leaf.dataset.x}px,
${leaf.dataset.y}px
)
rotate(${leaf.dataset.rotate}deg)
`;

leaf.style.opacity=0;

},i*12);

});

},500);

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
