const ol = document.getElementById('ol')

const numbers = Array.apply(null, {length: 100}).map(() => Math.floor(Math.random() * 100))

numbers.forEach((number, index) => {
  setTimeout(() => {
    const li = document.createElement('li')
    li.innerText = `----------- ${number}`
    
    ol.appendChild(li)
    console.log(index)
  }, index * 1000)
})
 
