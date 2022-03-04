const x = document.getElementById('x')
const y = document.getElementById('y')

const maxButton = document.getElementById('change')

maxButton.addEventListener('click', () => {
  const tempValue = x.value
  x.value = y.value
  y.value = tempValue
})
