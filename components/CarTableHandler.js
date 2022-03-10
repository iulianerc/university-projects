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
    cars.forEach((car) => {
      carRows += `
        <tr>
          <td>${car.name}</td>
          <td>${car.engineType}</td>
          <td>${car.maxSpeed}</td>
          <td>${car.price}</td>
        </tr>
       `
    })
    
    this.container.innerHTML = this.demoTable.replace('{{cars}}', carRows)
  }
}