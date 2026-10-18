const images = [
    "/assets/images/Designer (1).png",
    "/assets/images/Designer (2).png",
    "/assets/images/Designer (3).png",
    "/assets/images/Designer (4).png",
    "/assets/images/Designer (5).png",
    "/assets/images/Designer (6).png",
    "/assets/images/Designer (7).png",
    "/assets/images/Designer (8).png",
    "/assets/images/Designer (9).png",
    "/assets/images/Designer (10).png"
];

let currentSlide = 0;

function openSlideshow(index) {
    currentSlide = index;

    document.getElementById("slideshowModal").style.display = "block";

    showSlide();
}

function closeSlideshow() {
    document.getElementById("slideshowModal").style.display = "none";
}

function changeSlide(direction) {
    currentSlide += direction;

    if (currentSlide >= images.length) {
        currentSlide = 0;
    }

    if (currentSlide < 0) {
        currentSlide = images.length - 1;
    }

    showSlide();
}

function showSlide() {
    document.getElementById("slideImage").src =
        images[currentSlide];
}
