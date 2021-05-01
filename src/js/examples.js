import { MDCTooltip } from '@material/tooltip'
import { MDCTabBar } from '@material/tab-bar'
import { MDCList } from '@material/list'
import { MDCMenu } from '@material/menu'
import { MDCSelect } from '@material/select'
import { Corner } from '@material/menu-surface/constants'
import { MDCTextField } from '@material/textfield'
import { MDCSwitch } from '@material/switch'
import { MDCFormField } from '@material/form-field'
import { MDCCheckbox } from '@material/checkbox'
import { MDCRadio } from '@material/radio'
import Accordion from 'accordion/src/accordion.mjs'
import { MDCDialog } from '@material/dialog'
import { MDCSlider } from '@material/slider'
import Swiper from 'swiper/bundle'

require('./main')

// Initialize accordions
const accordionsCollection = document.querySelectorAll('.accordion')
const accordions = []
for (let index = 0; index < accordionsCollection.length; index += 1) {
  accordions.push(
    new Accordion(accordionsCollection[index], {
      modal: true, // close the current TAB when opening others
    })
  )
}

// Initialize MDCTooltip
const tooltipsCollection = document.querySelectorAll('.mdc-tooltip')
window.tooltips = []
for (let index = 0; index < tooltipsCollection.length; index += 1) {
  window.tooltips.push(new MDCTooltip(tooltipsCollection[index]))
}

const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'))
const tabBody = document.querySelectorAll('.tab-body')

tabBar.listen('MDCTabBar:activated', (event) => {
  // Hide currently-active content
  document
    .querySelector('.tab-body--active')
    .classList.remove('tab-body--active')
  // Show content for newly-activated tab
  tabBody[event.detail.index].classList.add('tab-body--active')
})

// Initialize MDCSwitch
const switchesCollection = document.querySelectorAll('.mdc-switch')
const switches = []
for (let index = 0; index < switchesCollection.length; index += 1) {
  switches.push(new MDCSwitch(switchesCollection[index]))
}

// Initialize MDCList
const listCollection = document.querySelectorAll('.mdc-list')
const lists = []
for (let index = 0; index < listCollection.length; index += 1) {
  lists.push(new MDCList(listCollection[index]))
}

// Initialize MDCFormField
const textfieldsCollection = document.querySelectorAll('.mdc-text-field')
const textfields = []
for (let index = 0; index < textfieldsCollection.length; index += 1) {
  textfields.push(new MDCTextField(textfieldsCollection[index]))
}

// Initialize MDCFormField, MDCCheckbox, MDCRadio
const formfieldsCollection = document.querySelectorAll(
  '.mdc-form-field, .mdc-checkbox, .mdc-radio'
)
const formfields = []
for (let index = 0; index < formfieldsCollection.length; index += 1) {
  if (formfieldsCollection[index].classList.contains('mdc-form-field')) {
    formfields.push(new MDCFormField(formfieldsCollection[index]))
  } else if (formfieldsCollection[index].classList.contains('mdc-checkbox')) {
    formfields.push(new MDCCheckbox(formfieldsCollection[index]))
  } else if (formfieldsCollection[index].classList.contains('mdc-radio')) {
    formfields.push(new MDCRadio(formfieldsCollection[index]))
  }
}

// Initialize MDCDialog
const dialogsCollection = document.querySelectorAll('.mdc-dialog')
const dialogs = []
for (let index = 0; index < dialogsCollection.length; index += 1) {
  dialogs.push(new MDCDialog(dialogsCollection[index]))
}

// Listener callback for dialog openers
const dialogOpenerListener = (e) => {
  //   It runs through all dialogs,
  //   searching one that match opener's data-dialog attribute's value

  dialogs.every((dialog) => {
    if (dialog.root.id === e.currentTarget.dataset.dialog) {
      // change Continue button - custom href
      if (e.currentTarget.dataset.continue) {
        const continueBtn = dialog.container.querySelector('.continue')
        if (continueBtn) {
          continueBtn.setAttribute('href', e.currentTarget.dataset.continue)
        }
      }
      // and opens dialog when finds the right one
      dialog.open()
      // return false to break searching loop of 'every' method
      return false
    }
    return true
  })
}
// Search for dialog openers
// (elements with class js-open-dialog and data-dialog attribute)

const dialogOpenersCollection = document.querySelectorAll('.js-open-dialog')
for (let index = 0; index < dialogOpenersCollection.length; index += 1) {
  dialogOpenersCollection[index].addEventListener('click', dialogOpenerListener)
}

// Initialize MDCMenu with position

const menuEls = Array.from(document.querySelectorAll('.mdc-menu'))

menuEls.forEach((menuEl) => {
  // Initialize MDCSimpleMenu on each ".mdc-simple-menu"
  const menu = new MDCMenu(menuEl)

  // We wrapped menu and toggle into containers for easier selecting the toggles
  const dropdownToggle = menuEl.parentElement.querySelector(
    '.js--dropdown-toggle'
  )
  if (dropdownToggle) {
    dropdownToggle.addEventListener('mouseup', () => {
      menu.open = !menu.open
    })
  }

  menu.setAnchorCorner(Corner.BOTTOM_START)
})

// Initialize MDCSelect
const selectCollection = document.querySelectorAll('.mdc-select')
const selects = []
for (let index = 0; index < selectCollection.length; index += 1) {
  selects.push(new MDCSelect(selectCollection[index]))
}

// Initialize MDCSlider
const slidersCollection = document.querySelector('.mdc-slider')
const sliders = []
for (let index = 0; index < slidersCollection.length; index += 1) {
  sliders.push(new MDCSlider(slidersCollection[index]))
}

// Initialize Swiper Sliders
const swipersCollection = document.querySelectorAll('.swiper-container')
window.swipers = []
for (let index = 0; index < swipersCollection.length; index += 1) {
  window.swipers.push(
    new Swiper(swipersCollection[index], {
      speed: 800,
      spaceBetween: 24,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        // when window width is >= 599px
        599: {
          slidesPerView: 2,
          spaceBetween: 16,
          slidesPerGroup: 2,
        },
        839: {
          slidesPerView: 3,
          spaceBetween: 24,
          slidesPerGroup: 3,
        },
        991: {
          slidesPerView: 4,
          spaceBetween: 24,
          slidesPerGroup: 4,
        },
        1199: {
          slidesPerView: 5,
          spaceBetween: 24,
          slidesPerGroup: 5,
        },
        // when window width is >= 1599px WIEDE SCREENS
        1599: {
          slidesPerView: 6,
          spaceBetween: 24,
          slidesPerGroup: 6,
        },
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  )
}
