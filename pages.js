window.addEventListener("load", main);
var slideIndex;
var top;
addFloat();

document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.getElementById("navbar");
    var top = navbar.offsetTop;
    window.onscroll = function () { stick() };

    function stick() {
        if (window.scrollY >= top) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    }
});

function initializeSlides() {
    slideIndex = 1;
    showSlides(slideIndex);
    prev = document.getElementById("prev");
    next = document.getElementById("next");
    prev.addEventListener('click', function () {
        plusSlides(-1);
        prev.removeAttribute("class", "float");
    });
    next.addEventListener('click', function () {
        plusSlides(1);
        next.removeAttribute("class", "float");
    });

    prev.addEventListener('mouseover', function() {
        prev.setAttribute("class", "prev float");
    })
    next.addEventListener('mouseover', function() {
        next.setAttribute("class", "next float");
    })

    prev.addEventListener('mouseout', function() {
        prev.removeAttribute("class", "float");
        prev.setAttribute("class", "prev");
    })
    next.addEventListener('mouseout', function() {
        next.removeAttribute("class", "float");
        next.setAttribute("class", "next");
    })
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides1");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].setAttribute("style", "display: block");
    dots[slideIndex - 1].className += " active";
}

function displayMore(dots, text, button) {
    var ellipse = document.getElementById(dots);
    var moreText = document.getElementById(text);
    var moreBtn = document.getElementById(button);

    if(ellipse.style.display === "none") {
        ellipse.style.display =  "inline";
        moreText.style.display = "none";
        moreBtn.innerHTML = "<img src='./images/small_down_arrow.png' alt=''>"
    } else {
        ellipse.style.display =  "none";
        moreText.style.display = "inline";
        moreBtn.innerHTML = "<img src='./images/small_up_arrow.png' alt=''>";
    }   
}

function addFloat() {
    let btn1 = document.getElementById("readMore_btn1");
    let btn2 = document.getElementById("readMore_btn2");
    let btn3 = document.getElementById("readMore_btn3");
    let btn4 = document.getElementById("readMore_btn4");

    btn1.addEventListener('mouseover', function() {
        btn1.setAttribute("class", "float");
    })
    btn2.addEventListener('mouseover', function() {
        next.setAttribute("class", "float");
    })
    btn3.addEventListener('mouseover', function() {
        next.setAttribute("class", "float");
    })
    btn4.addEventListener('mouseover', function() {
        next.setAttribute("class", "float");
    })

    btn1.addEventListener('mouseout', function() {
        btn1.removeAttribute("class", "float");
    })
    btn2.addEventListener('mouseout', function() {
        btn2.removeAttribute("class", "float");
    })
    btn3.addEventListener('mouseout', function() {
        btn3.removeAttribute("class", "float");
    })
    btn4.addEventListener('mouseout', function() {
        btn4.removeAttribute("class", "float");
    })
}

function main() {
    initializeSlides();
}