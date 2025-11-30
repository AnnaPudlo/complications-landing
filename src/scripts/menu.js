document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('expanded');
    document.querySelector('.hamburger').classList.toggle('active');
    document.getElementById('header').classList.toggle('menu-open');
});