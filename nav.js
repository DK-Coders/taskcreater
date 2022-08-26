let hamburger = document.getElementById('hamburger');
let nav_menu = document.getElementById('navlist');
let burger_svg = document.getElementById('burger_svg');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    nav_menu.classList.toggle('active');
})

document.querySelectorAll('.menuItem').forEach(n => n.addEventListener('click', function () {
    hamburger.classList.remove('active');
    nav_menu.classList.remove('active');
}));