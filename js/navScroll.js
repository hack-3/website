function navScroll(e) {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    const body = document.body;

    if (screen.width > 768) {
        return;
    }

    // Toggle nav (for mobile view)
    nav.classList.toggle("nav-active");

    // Animate text in
    navLinks.forEach((link, index) => {
        link.style.animation = "";
    });

    // Burger animation
    burger.classList.toggle("toggle");

    body.style.position = "";
    body.style.width = "";
}