class Tour {
  name;
  costOneDay;
  days;
  insurance;
  
  constructor(name, costOneDay, days, insurance) {
    this.name = name;
    this.costOneDay = costOneDay;
    this.days = days;
    this.insurance = insurance;
  }
  
  getPrice() {
    return this.days * this.costOneDay + this.insurance
  }
  
  getName() {
    return this.name;
  }
  
  getCostOneDay() {
    return this.costOneDay;
  }
  
  getDays() {
    return this.days;
  }
  
  getInsurance() {
    return this.insurance;
  }
  
}

const tour = new Tour('Turkey', 1500, 7, 750);
console.log(tour.getName()); //afișează ' Turkey'
console.log(tour.getCostOneDay()); //afișează 1500
console.log(tour.getDays()); //afișează 7
console.log(tour.getInsurance()); // afișează 750
console.log(tour.getPrice()); //afișează 11250 = 1500*7+750
