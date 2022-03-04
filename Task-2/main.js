const x = document.getElementById('x')
const y = document.getElementById('y')

const maxButton = document.getElementById('max')

const resultBlock = document.getElementById('result')

maxButton.addEventListener('click', () => {
  resultBlock.innerText = Math.max(+x.value,+y.value)
})
