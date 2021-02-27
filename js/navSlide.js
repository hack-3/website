function navSlide() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    const body = document.body;

    burger.addEventListener("click", () => {
        // Toggle nav (for mobile view)
        nav.classList.toggle("nav-active");

        // Animate text in
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
            }
        });

        // Burger animation
        burger.classList.toggle("toggle");

        if (body.style.position) {
            body.style.position = "";
            body.style.width = "";
        } else {
            body.style.width = "100%"
            body.style.position = "fixed";
        }
    });
}

navSlide();