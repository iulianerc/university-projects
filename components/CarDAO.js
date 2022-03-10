class CarDAO {
  cars = []
  
  add(carProps) {
    this.cars.push(new Car(carProps))
    
    return this
  }
  
  addMany(carsProps) {
    carsProps.forEach((carsProps) => this.add(carsProps))
    
    return this
  }
  
  delete(carIndex) {
    this.cars = this
      .cars
      .filter((car, index) => index !== Number(carIndex))
  }
  
  getAll() {
    return this.cars
  }
  
  calculateTotalPrice() {
    return this.cars.reduce((acc, car) => {
      return acc + car.price
    }, 0);
  }
  
  modifyField() {
    this.cars = this.cars.map((car) => {
      car.price += 10
      return car
    })
  }
  
  findElements(name) {
    const regExp = new RegExp(name, 'ig');
    
    return this.cars.find((car) => car.name.match(regExp) !== null);
  }
}