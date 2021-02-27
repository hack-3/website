//Get the button:
topButton = document.getElementById("top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        topButton.style.display = "block";
        topButton.style.animation = "fadeIn 0.2s ease forwards";
    } else {
        topButton.style.animation = "fadeOut 0.2s ease forwards";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 