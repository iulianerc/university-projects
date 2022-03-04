const ol = document.getElementById('ol')

window.addEventListener('load', () => {
  setTimeout(generateElements, 3000)
})

const generateElements = () => {
  for (let index = 1; index <= 10; index++) {
    const li = document.createElement('li')
    li.innerText = `Item NR ${index}`
    
    ol.appendChild(li)
  }
}
