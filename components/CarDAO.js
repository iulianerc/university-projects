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
  
  getAll() {
    return this.cars
  }
}