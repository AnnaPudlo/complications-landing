const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-links');
const header = document.getElementById('header');
const links = document.querySelectorAll('.nav-links a');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('expanded');
    hamburger.classList.toggle('active');
    header.classList.toggle('menu-open');

    if (nav.classList.contains('expanded')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
});

links.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');

        if (href.startsWith('#')) {
            e.preventDefault();

            nav.classList.remove('expanded');
            hamburger.classList.remove('active');
            header.classList.remove('menu-open');
            document.body.style.overflow = '';

            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});