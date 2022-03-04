const ol = document.getElementById('ol')

window.addEventListener('load', () => {
  setTimeout(generateElements, 0)
})

const generateElements = () => {
  for (let index = 1; index <= 10; index++) {
    const li = document.createElement('li')
    if (index === 1) {
      li.id = 'item'
    }
    li.innerText = `Item NR ${index}`
    
    ol.appendChild(li)
  }
}
