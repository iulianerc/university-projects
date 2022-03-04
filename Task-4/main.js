const container = document.getElementById('container')

container.addEventListener('mouseenter', () => {
  container.classList.add('red')
})

container.addEventListener('mouseleave', () => {
container.classList.remove('red')
})

