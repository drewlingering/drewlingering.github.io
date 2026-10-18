<div class="gallery-item">
    <img src="/assets/images/Designer (1).png"
         alt="Gallery Cover"
         onclick="openSlideshow(0)">
    <p>Gallery Caption</p>
</div>

<div id="slideshowModal" style="display:none;">
    <span onclick="closeSlideshow()">&times;</span>

    <img id="slideImage">

    <button onclick="changeSlide(-1)">Previous</button>
    <button onclick="changeSlide(1)">Next</button>
</div>

<script>
const images = [
    "/assets/images/Designer (2).png",
    "/assets/images/Designer (3).png",
    "/assets/images/Designer (4).png",
    "/assets/images/Designer (5).png",
    "/assets/images/Designer (6).png",
    "/assets/images/Designer (7).png",
    "/assets/images/Designer (8).png",
    "/assets/images/Designer (9).png",
    "/assets/images/Designer (10).png",
];

let currentSlide = 0;

function openSlideshow(n) {
    currentSlide = n;
    document.getElementById("slideshowModal").style.display = "block";
    document.getElementById("slideImage").src = images[currentSlide];
}

function closeSlideshow() {
    document.getElementById("slideshowModal").style.display = "none";
}

function changeSlide(n) {
    currentSlide += n;

    if (currentSlide < 0) {
        currentSlide = images.length - 1;
    }

    if (currentSlide >= images.length) {
        currentSlide = 0;
    }

    document.getElementById("slideImage").src = images[currentSlide];
}
</script>
