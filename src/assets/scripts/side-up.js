const img = document.querySelector(".profile-image");
const title = document.querySelector(".profile-subtitle");

img.addEventListener("click", function() {
    this.classList.toggle("side-up");
});

title.addEventListener("click", function() {
    img.classList.toggle("side-up");
});
