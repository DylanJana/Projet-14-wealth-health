export let allTextInputCheck = false
export let allDateInputCheck = false
export let allNumberInputCheck = false

export function verifyFormFields() {
  verifyInputText()
  verifyDateInput()
  verifyNumberInput()
  submitForm(allTextInputCheck, allDateInputCheck, allNumberInputCheck)
}

function verifyInputText() {
  let inputFirstName = document.querySelector('#firstName')
  let inputLastName = document.querySelector('#lastName')
  let inputStreet = document.querySelector('#street')
  let inputCity = document.querySelector('#city')

  if(inputFirstName.value.length < 3) {
    inputFirstName.nextSibling.classList.remove('d--none')
    inputFirstName = false
  } else {
    inputFirstName = true
  }

  if(inputLastName.value.length < 3) {
    inputLastName.nextSibling.classList.remove('d--none')
    inputLastName = false
  } else {
    inputLastName = true
  }

  if(inputStreet.value.length < 3) {
    inputStreet.nextSibling.classList.remove('d--none')
    inputStreet = false
  } else {
    inputStreet = true
  }

  if(inputCity.value.length < 3) {
    inputCity.nextSibling.classList.remove('d--none')
    inputCity = false
  } else {
    inputCity = true
  }

  if(inputFirstName && inputLastName && inputStreet && inputCity === true) {
    allTextInputCheck = true
  }
  return allTextInputCheck
}

function verifyDateInput() {
  let dateOfBirth = document.querySelector('#dateBirth')
  let startDate = document.querySelector('#startDate')

  if(dateOfBirth.value.length < 1) {
    dateOfBirth.nextSibling.classList.remove('d--none')
    dateOfBirth = false
  } else {
    dateOfBirth = true
  }

  if(startDate.value.length < 1) {
    startDate.nextSibling.classList.remove('d--none')
    startDate = false
  } else {
    startDate = true
  }
  
  if(dateOfBirth && startDate === true) {
    allDateInputCheck = true
  }

  return allDateInputCheck
}

function verifyNumberInput() {
  let zipCode = document.querySelector('#zipCode')

  if(zipCode.value.length <= 4) {
    zipCode.nextSibling.classList.remove('d--none')
    zipCode = false
  } else {
    zipCode = true
  }

  if(zipCode === true) {
    allNumberInputCheck = true
  }

  return allNumberInputCheck
}

export function submitForm(allTextInputCheck, allDateInputCheck, allNumberInputCheck) {
  if(allTextInputCheck === false || allDateInputCheck === false || allNumberInputCheck === false) {
    // document.querySelector('#createEmploye').submit(function(e) {
    //   e.preventDefault()
    // })
    return false
  }
}