// SHOW SECTION
function show(id) {
    let sections = document.querySelectorAll(".section");
    sections.forEach(sec => sec.style.display = "none");

    let current = document.getElementById(id);
    current.style.display = "flex";
    current.style.justifyContent = "center";
    current.style.alignItems = "center";
}

// START APP
document.addEventListener("DOMContentLoaded", () => {
    let count = 3;
    show("countdown");

    let timer = setInterval(() => {
        document.getElementById("countText").innerText = count;
        count--;

        if (count < 0) {
            clearInterval(timer);
            show("loading");

            setTimeout(() => {
                show("intro");
            }, 3000);
        }
    }, 1000);
});

// START CAKE
function startCake() {
    show("cake");
}

// SWIPE DETECTION
let startX = 0;

document.addEventListener("mousedown", e => startX = e.clientX);
document.addEventListener("mouseup", e => {
    if (Math.abs(e.clientX - startX) > 50) cutCake();
});

document.addEventListener("touchstart", e => startX = e.touches[0].clientX);
document.addEventListener("touchend", e => {
    if (Math.abs(e.changedTouches[0].clientX - startX) > 50) cutCake();
});

// CUT CAKE
function cutCake() {
    let cake = document.getElementById("cakeImg");
    cake.src = "cake_cut.png";

    setTimeout(() => {
        show("gallery");
        startGallerySlider();
    }, 1500);
}

// AUTO SLIDER
let memories = ["img1.png", "img2.png", "img3.png", "img4.png"];
let index = 0;

function startGallerySlider() {
    setInterval(() => {
        index = (index + 1) % memories.length;
        document.getElementById("memoryImg").src = memories[index];
    }, 2000);
}

// FINAL PAGE
function openMessage() {
    show("final");
}