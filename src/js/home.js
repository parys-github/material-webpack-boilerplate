import { MDCDialog } from '@material/dialog'

require('./main')

// Initialize MDCDialog
const dialogsCollection = document.querySelectorAll('.mdc-dialog')
const dialogs = []
for (let index = 0; index < dialogsCollection.length; index += 1) {
  dialogs.push(new MDCDialog(dialogsCollection[index]))
}
// Listener callback for dialog openers
const dialogOpenerListener = (e) => {
  //   If runs through all dialogs,
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
