class CarsDisplayHandler {
  demoTable = `
    <table id="car_table_demo" style="display: none">
      <tr>
        <th>Name</th>
        <th>Engine Type</th>
        <th>Max Speed</th>
        <th>Price</th>
      </tr>
      {{cars}}
    </table>`;
  
  constructor() {
    this.container = document.getElementById('car_table_container')
  }
  
  render(cars) {
    if (cars instanceof Car) {
      cars = [cars]
    }
    
    let carRows = ''
    cars.forEach((car, index) => {
      carRows += `
        <tr>
          <td>${car.name}</td>
          <td>${car.engineType}</td>
          <td>${car.maxSpeed}</td>
          <td>${car.price}</td>
          <td class="deleteAction" data-car-index="${index}">X</td>
        </tr>
       `
    })
    
    this.container.innerHTML = this.demoTable.replace('{{cars}}', carRows)
  }
  
  addEventsListeners(carsDAO) {
    this.addDeleteButtonListener(carsDAO)
  }
  
  addDeleteButtonListener(carsDAO) {
    const deleteButtons = document.getElementsByClassName('deleteAction')
    
    for (const deleteButton of deleteButtons) {
      deleteButton.addEventListener('click', (event) => {
        carDAO.delete(event.target.dataset.carIndex)
        this.render(carsDAO.getAll())
        this.addEventsListeners(carsDAO)
      })
    }
  }
  
  calculateTotalPrice(carsDAO) {
    const totalPrice = carsDAO.calculateTotalPrice()
    
    alert(`Total price = ${totalPrice}`)
  }
  
  increasePriceForAllCars(carsDAO) {
    carsDAO.modifyField()
    this.render(carsDAO.getAll())
    this.addEventsListeners(carsDAO)
  }
  
  findElement(carsDAO) {
    const carName = prompt('Give car name')
    const car = carsDAO.findElements(carName)
    
    alert(car)
  }
}