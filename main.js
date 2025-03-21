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
