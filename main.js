const carDAO = new CarDAO()
const carTableHandler = new CarsTableHandler()

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
