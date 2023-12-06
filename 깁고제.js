var slides = document.querySelectorAll("#slides > img");
var prev = document.getElementById("prev");
var next = docoment.getElementById("next");
var current = 0;

slideShow(current);
prev.onclick = prevSlide;
next.onclick = nextSlide;

function slideShow(n) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[n].style.display = "block";
}

function prevSlide() {
    if (current > 0) current -= 1;
    else
        current = slides.length - 1;
        slideShow(current);
}

function nextSlide() {
    if (current < slides.length - 1) current += 1;
    else
        current = 0;
        slideShow(current);
}