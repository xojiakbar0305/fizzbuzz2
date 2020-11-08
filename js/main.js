var FIZZ = 3
var BUZZ = 5

var elForm = document.querySelector('.site-form') //forma
var elInput = elForm.querySelector('.site-input') //input
var elButton = elForm.querySelector('.site-button') //button

var elFizz = document.querySelector('.site-fizz') //fizz span
var elBuzz = document.querySelector('.site-buzz') //buzz span
var elFizzBuzz = document.querySelector('.site-fizzbuzz') //fizzbuzz span

var elFizzBox = document.querySelector('.site-boxfizz') //fiz div
var elBuzzBox = document.querySelector('.site-boxbuzz') //buzz div
var elFizzBuzzBox = document.querySelector('.site-boxfizzbuzz') //fizzbuzz div


elForm.addEventListener('submit', function(evt) {
  evt.preventDefault()
  var fizzArray = []
  var buzzArray = []
  var fizzBuzzArray = []

  var elInputResult = parseInt(elInput.value.trim(), 10)

  if (isNaN(elInputResult)) {
    alert('xato raqam kiriting')
    elInput.value = ''
    elInput.focus()
    return
  }
  else if (elInputResult < 2) {
    alert('ikkidan katta raqam kiriting')
    elInput.value = ''
    elInput.focus()
    return
  }

  elFizzBox.innerHTML = ''
  elBuzzBox.innerHTML = ''
  elFizzBuzzBox.innerHTML = ''

  for (var i = 1; i <= elInputResult; i++) {

    if (i % FIZZ === 0 && i % BUZZ === 0 ) {
      fizzBuzzArray.push(i)
      elFizzBuzz.textContent = fizzBuzzArray.length
      var newText = document.createElement('p')
      newText.textContent = i
      elFizzBuzzBox.appendChild(newText)
    }
    else if (i % FIZZ === 0) {
      fizzArray.push(i)
      elFizz.textContent = fizzArray.length
      var newText = document.createElement('p')
      newText.textContent = i
      elFizzBox.appendChild(newText)
    }
    else if (i % BUZZ === 0) {
      buzzArray.push(i)
      elBuzz.textContent = buzzArray.length
      var newText = document.createElement('p')
      newText.textContent = i
      elBuzzBox.appendChild(newText)
    }
    else if (i < FIZZ && i < BUZZ) {
      elFizz.textContent = '0'
      elBuzz.textContent = '0'
      elFizzBuzz.textContent = '0'
    }
  }
})