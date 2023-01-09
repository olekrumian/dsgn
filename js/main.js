const button = document.querySelector('.switch')
const element = document.querySelector('.main-element')
const activeClass = 'main-theme-active'

window.addEventListener('load', () => {
  localStorage.getItem('theme') && element.classList.add(activeClass)
})

button.addEventListener('click', () => {
  element.classList.toggle(activeClass)
  localStorage.getItem('theme')
    ? localStorage.removeItem('theme', activeClass)
    : localStorage.setItem('theme', activeClass)
})

function burgerMenu(selector) {
  let menu = $(selector)
  let button = menu.find('.burger__menu-button')
  let link = menu.find('.burger__menu-link')

  button.on('click', (e) => {
    e.preventDefault()
    toggleMenu()
  })

  link.on('click', () => toggleMenu())

  function toggleMenu() {
    menu.toggleClass('burger__menu-active')

    if (menu.hasClass('burger__menu-active')) {
      $('body').css('overflow', 'hidden')
    } else {
      $('body').css('overflow', 'visible')
    }
  }
}

burgerMenu('.burger__menu')
