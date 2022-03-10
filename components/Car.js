class Car {
  constructor(carProps) {
    this.name = carProps.name
    this.engineType = carProps.engineType
    this.maxSpeed = carProps.maxSpeed
    this.price = carProps.price
  }
  
  toString() {
    return `Name: ${this.name}, engine type: ${this.engineType}, ....`
  }
  
  // Here should be used get set Methods - but is not the case
}
