window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    navbar.style.opacity = window.scrollY <= 1000 ? '0' : '1';
});

window.addEventListener('load', function() {
    const navbar = document.querySelector('.navbar');
    navbar.style.opacity = window.scrollY == 1000 ? '0' : '0';
});