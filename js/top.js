//Get the button:
topButton = document.getElementById("top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = () => {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        topButton.style.opacity = "1";
    } else {
        topButton.style.opacity = "0";
    }
};
