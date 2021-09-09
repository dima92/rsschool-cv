const hamburger = document.querySelector('.hamburger')
const hamburgerLine = document.querySelector('.hamburger__line')
const navigation = document.querySelector('.navigation')

hamburger.addEventListener('click', () => {
  hamburgerLine.classList.toggle('hamburger__line_active')
  navigation.classList.toggle('navigation_hamburger-active')
})