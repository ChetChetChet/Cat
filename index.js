window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    navbar.style.opacity = window.scrollY <= 700 ? '0' : '1';
});
// Initially check if the navbar should be hidden
window.addEventListener('load', function() {
    const navbar = document.querySelector('.navbar');
    navbar.style.opacity = window.scrollY === 700 ? '0' : '0';
});