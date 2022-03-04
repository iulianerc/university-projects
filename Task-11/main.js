const counter = document.getElementById('counter')

counter.addEventListener('click', () => {
  counter.innerText = +counter.innerText * 2
})
