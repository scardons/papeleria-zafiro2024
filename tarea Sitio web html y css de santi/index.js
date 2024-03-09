window.addEventListener('scroll', function() {
    console.log('Scrolling...');
    var header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});

var menuAbierto = document.querySelector('.menu-abierto');
var navbar = document.querySelector('.navbar');

menuAbierto.addEventListener('change', function() {
    if (this.checked) {
        navbar.style.display = 'flex';
    } else {
        navbar.style.display = 'none';
    }
});