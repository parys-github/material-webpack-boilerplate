// Test import of styles
import '@/sass/main.scss'
import { MDCRipple } from '@material/ripple'
import Headroom from 'headroom.js'
// Headroom setup
const header = document.querySelector('header')
const headroom = new Headroom(header, { offset: 240, tolerance: 10 })
headroom.init()

// wait for DOM complete load - initial the spinner loader
window.addEventListener('load', () => {
  document.querySelector('.page-container').style.opacity = '1'
  setTimeout(() => {
    document.querySelector('.loader').remove('.isloading')
  }, 400)
})

const ripples = []
ripples.map.call(
  document.querySelectorAll(
    '.mdc-button, .mdc-icon-button, .mdc-card__primary-action'
  ),
  (el) => new MDCRipple(el)
)
// Go to top button event listener
const topbutton = document.querySelector('#topBtn')
window.addEventListener('scroll', () => {
  if (
    document.body.scrollTop > 216 ||
    document.documentElement.scrollTop > 216
  ) {
    topbutton.style.cssText =
      'opacity: 1; right: 18px; bottom: 28px; transform: scale(1);'
  } else {
    topbutton.style.cssText =
      'opacity: 0; right: -25px; bottom: -25px; transform: scale(0.1);'
  }
})
const clickGoToTop = []
clickGoToTop.map.call(document.querySelectorAll('#topBtn'), (el) => {
  el.addEventListener('click', () => {
    document.body.scrollTop = 0 // Safari
    document.documentElement.scrollTop = 0 // Chrome, Firefox, IE and Opera
  })
})
