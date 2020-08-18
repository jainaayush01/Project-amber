// Menu Show
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

// Active And Remove Menu
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    // Active one
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    // Remove Mobile Menu
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// Scroll Animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px'
    duration: 2000,
    reset: true
})

sr.reveal('.home__title', {})
sr.reveal('.button', {delay: 200})
sr.reveal('.home__img', {delay: 400})
sr.reveal('.home__social-icon', {interval: 200})