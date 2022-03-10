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
}