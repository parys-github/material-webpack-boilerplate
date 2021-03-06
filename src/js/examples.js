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
import 'audiojs'

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

for (let index = 0; index < dialogs.length; index += 1) {
  // Listening for each dialog closing
  dialogs[index].listen('MDCDialog:closing', (event) => {
    // If there is a video tag in dialog, just pause it
    const video = event.target.querySelector('video')
    if (video) {
      video.pause()
    }

    // If there is an iframe tag in dialog???
    const iframe = event.target.querySelector('iframe')
    if (iframe) {
      // ??? stash src attribute value
      const src = iframe.getAttribute('src')
      // remove it
      iframe.setAttribute('src', '')
      // and bring back
      iframe.setAttribute('src', src)
    }
  })
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

// Audiojs initialize
;(() => {
  const pcastPlayers = document.querySelectorAll('.pcast-player')
  const speeds = [1, 1.25, 1.5, 1.75, 2, 2.5, 3]

  for (let i = 0; i < pcastPlayers.length; i += 1) {
    const player = pcastPlayers[i]
    const audio = player.querySelector('audio')
    const playPause = player.querySelector('.pcast-play-pause')
    const rewind = player.querySelector('.pcast-rewind')
    const progress = player.querySelector('.pcast-progress')
    const speed = player.querySelector('.pcast-speed')
    const mute = player.querySelector('.pcast-mute')
    const currentTime = player.querySelector('.pcast-currenttime')
    const duration = player.querySelector('.pcast-duration')

    let currentSpeedIdx = 0

    const toHHMMSS = function (totalsecs) {
      const secNum = parseInt(totalsecs, 10)
      let hours = Math.floor(secNum / 3600)
      let minutes = Math.floor((secNum - hours * 3600) / 60)
      let seconds = secNum - hours * 3600 - minutes * 60

      if (hours < 10) {
        hours = '0' + hours
      }
      if (minutes < 10) {
        minutes = '0' + minutes
      }
      if (seconds < 10) {
        seconds = '0' + seconds
      }

      const time = minutes + ':' + seconds
      return time
    }

    const durationHandler = () => {
      if (audio.duration > 0) {
        progress.setAttribute('max', Math.floor(audio.duration))
        duration.textContent = toHHMMSS(audio.duration)
      }
    }
    audio.addEventListener('loadedmetadata', durationHandler)
    if (audio.readyState >= 2) {
      durationHandler()
    }
    audio.addEventListener('timeupdate', () => {
      progress.value = audio.currentTime
      currentTime.textContent = toHHMMSS(audio.currentTime)
    })

    playPause.addEventListener('click', () => {
      if (audio.paused) {
        audio.play()
      } else {
        audio.pause()
      }
    })

    rewind.addEventListener('click', () => {
      audio.currentTime -= 10
    })

    progress.addEventListener('click', (e) => {
      audio.currentTime =
        Math.floor(audio.duration) * (e.offsetX / e.target.offsetWidth)
    })

    speed.addEventListener('click', () => {
      currentSpeedIdx =
        currentSpeedIdx + 1 < speeds.length ? currentSpeedIdx + 1 : 0
      audio.playbackRate = speeds[currentSpeedIdx]
      speed.textContent = speeds[currentSpeedIdx] + 'x'
      return true
    })

    mute.addEventListener('click', () => {
      if (audio.muted) {
        audio.muted = false
      } else {
        audio.muted = true
      }
    })
  }
})()
