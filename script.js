document.addEventListener("DOMContentLoaded", function () {
    var navbarToggle = document.getElementById("navbar-toggle");
    var navbarLinks = document.getElementById("navbar-links");

    navbarToggle.addEventListener("click", function () {
        navbarLinks.classList.toggle("active");
    });
});
