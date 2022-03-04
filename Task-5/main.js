const container = document.getElementById('container')

window.addEventListener('load', () => {
  
  for (let index = 1; index <= 10; index++) {
    const p = document.createElement('p')
    p.innerText = `"Paragraful NR ${index}`
    
    if (index % 2 === 0) {
      p.style.backgroundColor = 'blue'
    }
    
    container.appendChild(p)
  }
})
