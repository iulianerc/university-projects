const ul = document.getElementById('ul')

const students = [
  {
    name: ' Studen 1',
    average: 3,
  },
  {
    name: ' Studen 2',
    average: 7,
  },
  {
    name: ' Studen 3',
    average: 9.01,
  },
  {
    name: ' Studen 4',
    average: 1,
  },
  {
    name: ' Studen 5',
    average: 10,
  },
]

window.addEventListener('load', () => {
  const good = []
  const bad = []
  students.forEach((student) => {
    if (student.average < 5) {
      bad.push(student)
    }
    
    if (student.average > 9) {
      good.push(student)
    }
  })
  
  ul.append('----------- Media mai mica de 5')
  generateElements(bad)
  
  ul.append('-----------  Media mai mare de 9')
  generateElements(good)
})

const generateElements = (students) => {
  students.forEach((student) => {
    const li = document.createElement('li')
    li.innerText = `${student.name}, media: ${student.average}`
    
    ul.appendChild(li)
  })
}
