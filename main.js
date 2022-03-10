const carDAO = new CarDAO()
const carsDisplayHandler = new CarsDisplayHandler()

let carsProps = [
  {
    name: 'BMW',
    engineType: 'metan',
    maxSpeed: 14,
    price: 166,
  },
  {
    name: 'Mercedes',
    engineType: 'benzin',
    maxSpeed: 45,
    price: 266,
  },
  {
    name: 'Jeep',
    engineType: 'Cherosin',
    maxSpeed: 66,
    price: 432,
  },
  {
    name: 'Trotineta',
    engineType: 'Cine papa bine are corp frumos',
    maxSpeed: 999,
    price: 1,
  },
  {
    name: 'Jiguli',
    engineType: 'Atom',
    maxSpeed: 99999901,
    price: 99999999999,
  },
]

if (!localStorage.getItem('carsProps')) {
  localStorage.setItem('carsProps', JSON.stringify(carsProps))
}

carsProps = JSON.parse(localStorage.getItem('carsProps'))
carDAO.addMany(carsProps)

window.addEventListener('beforeunload', () => {
  localStorage.setItem('carsProps', JSON.stringify(carDAO.getAll()))
})

carsDisplayHandler.render(carDAO.getAll())
carsDisplayHandler.addEventsListeners(carDAO)

const addForm = document.getElementById('add_form')

const nameInput = document.getElementById('nameInput')
const engineTypeInput = document.getElementById('engineTypeInput')
const maxSpeedInput = document.getElementById('maxSpeedInput')
const priceInput = document.getElementById('priceInput')

const addNewCarButton = document.getElementById('add_new_car')

addNewCarButton.addEventListener('click', (event) => {
  event.preventDefault()
  
  if (!addForm.checkValidity()) {
    alert("Wrong input values, try again")
    return;
  }
  
  carDAO.add({
    name: nameInput.value,
    engineType: engineTypeInput.value,
    maxSpeed: Number(maxSpeedInput.value),
    price: Number(priceInput.value),
  })
  
  carsDisplayHandler.render(carDAO.getAll())
  carsDisplayHandler.addEventsListeners(carDAO)
  
  addForm.reset()
})
