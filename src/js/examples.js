import { MDCTooltip } from '@material/tooltip'
import { MDCTabBar } from '@material/tab-bar'
import { MDCList } from '@material/list'
import { MDCMenu } from '@material/menu'
import { Corner } from '@material/menu-surface/constants'
import { MDCTextField } from '@material/textfield'
import { MDCSwitch } from '@material/switch'
import { MDCFormField } from '@material/form-field'
import { MDCCheckbox } from '@material/checkbox'
import { MDCRadio } from '@material/radio'
import Accordion from 'accordion/src/accordion.mjs'
import { MDCDialog } from '@material/dialog'

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
/*
const menu = new MDCMenu(document.querySelector('.mdc-menu'))
const menuToggleButton = document.querySelector('.menu-toggle-button')
const menuToggleButtonHeight = menuToggleButton.getBoundingClientRect.height
menu.setAnchorMargin({ top: menuToggleButtonHeight })
menu.setAnchorCorner(Corner.BOTTOM_LEFT)

menuToggleButton.addEventListener('click', () => {
  menu.open = !menu.open
})
*/

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
