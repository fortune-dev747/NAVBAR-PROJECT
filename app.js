const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.active');

toggle.addEventListener('click', () => {
    links.classList.toggle('active');
});