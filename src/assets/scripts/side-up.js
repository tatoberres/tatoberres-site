document.querySelectorAll(".profile-image").forEach(function(elemento) {
    elemento.addEventListener("click", function() {
        this.classList.toggle("side-up");
    });
});