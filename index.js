const btnHamburger = document.querySelector('.hamburger')
const navLinks = document.querySelectorAll('.nav-link')

const navEl = document.querySelector('.nav')

btnHamburger.addEventListener('click', ()=>{
    document.body.classList.toggle('overflow_hidden')

})

navLinks.forEach((link)=>{
    link.addEventListener('click', ()=>{
    document.body.classList.remove('overflow_hidden')

    })
})

