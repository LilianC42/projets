document.addEventListener("DOMContentLoaded", function() {
    // Simulez une pause de 3 secondes (3000 millisecondes)
    setTimeout(function() {
        document.getElementById("loader").classList.add("loaded");
        document.body.style.overflow = "visible"; // Permet de réactiver le défilement
    }, 3000);
});