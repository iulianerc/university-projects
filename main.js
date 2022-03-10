const carDAO = new CarDAO()
const carTableHandler = new CarsDisplayHandler()

const carsProps = [
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

carDAO.addMany(carsProps)

carTableHandler.render(carDAO.getAll())
carTableHandler.addEventsListeners(carDAO)

const nameInput = document.getElementById('nameInput')
const engineTypeInput = document.getElementById('engineTypeInput')
const maxSpeedInput = document.getElementById('maxSpeedInput')
const priceInput = document.getElementById('priceInput')

const addForm = document.getElementById('add_form')

document
  .getElementById('add_new_car')
  .addEventListener('click', (event) => {
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
  
    carTableHandler.render(carDAO.getAll())
    carTableHandler.addEventsListeners(carDAO)
    
    addForm.reset()
  })
