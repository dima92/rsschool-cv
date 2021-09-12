(function () {
  const header = document.querySelector('.header')
  window.onscroll = () => {
    if (window.pageYOffset > 50) {
      header.classList.add('header_active')
    } else {
      header.classList.remove('header_active')
    }
  }
}())

// Burger handler
const hamburger = document.querySelector('.hamburger')
const hamburgerLine = document.querySelector('.hamburger__line')
const navigation = document.querySelector('.navigation')

hamburger.addEventListener('click', () => {
  hamburgerLine.classList.toggle('hamburger__line_active')
  navigation.classList.toggle('navigation_hamburger-active')
})
