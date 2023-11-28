const btn = document.getElementById('btn-menu')
const menu = document.querySelector('.header-div-nav')

btn.addEventListener('click', () => {
    menu.classList.toggle('nav-active')
})