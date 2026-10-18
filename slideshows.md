---
layout: default
title: "Image Gallery"
---

# Image Gallery

<div class="gallery-item">
    <img src="/assets/images/Designer (1).png"
         alt="Gallery Cover"
         onclick="openSlideshow(0)">
</div>

<div id="slideshowModal" style="display:none;">
    <span onclick="closeSlideshow()">&times;</span>

    <img id="slideImage">

    <button onclick="changeSlide(-1)">Previous</button>
    <button onclick="changeSlide(1)">Next</button>
</div>

<script src="/assets/js/slideshow.js"></script>
