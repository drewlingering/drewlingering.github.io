---
layout: flashingNames
title: FlashingNames
---
jekyll serve

<script>
function randomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function flash() {
  document.body.style.backgroundColor = randomColor();
  document.body.style.color = randomColor();
}

setInterval(flash, 500); // change colours every 0.5 seconds
</script>

<meta http-equiv="refresh" content="2">
