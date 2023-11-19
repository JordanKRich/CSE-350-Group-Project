var slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
        slides[i].classList.remove("active-slide");
    }
    slides[slideIndex-1].style.display = "block";  
    slides[slideIndex-1].classList.add("active-slide");
}

document.addEventListener("DOMContentLoaded", function(event) {
    showSlides(slideIndex);

    var prevButton = document.querySelector(".prev");
    var nextButton = document.querySelector(".next");

    if (prevButton) {
        prevButton.addEventListener("click", function() {
            plusSlides(-1);
        });
    } else {
        console.log("Previous button not found.");
    }

    if (nextButton) {
        nextButton.addEventListener("click", function() {
            plusSlides(1);
        });
    } else {
        console.log("Next button not found.");
    }
});
