import {log} from './log.js'

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
const links = document.querySelectorAll('.navigation__link')

links.forEach(link => {
  link.addEventListener('click', () => {
    hamburgerLine.classList.remove('hamburger__line_active')
    navigation.classList.remove('navigation_hamburger-active')
  })
})

hamburger.addEventListener('click', () => {
  hamburgerLine.classList.toggle('hamburger__line_active')
  navigation.classList.toggle('navigation_hamburger-active')
})

log()
