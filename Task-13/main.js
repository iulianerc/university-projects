const select = document.getElementById('select')

const button = document.getElementById('selected-city')

const resultBlock = document.getElementById('result')

button.addEventListener('click', () => {
  resultBlock.innerText = select.value
})
