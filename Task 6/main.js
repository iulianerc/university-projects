class Tour {
  name;
  costOneDay;
  days;
  insurance;
  tax;
  
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
  
  increaseDays(daysCount) {
    this.days += daysCount;
  }
  
  setTax(tax) {
    this.tax = tax;
  }
  
  getPriceNetto() {
    const price = this.getPrice()
    return price * this.tax / 100 + price
  }
}

const tour = new Tour('Turkey', 1500, 7, 750);
console.log(tour.getName()); //afișează ' Turkey'
console.log(tour.getCostOneDay()); //afișează 1500
console.log(tour.getDays()); //afișează 7
console.log(tour.getInsurance()); // afișează 750
console.log(tour.getPrice()); //afișează 11250 = 1500*7+750
tour.increaseDays(3); //mărește days cu 3
console.log(tour.getPrice()); //afișează 15750 = 1500*10+750
tour.setTax(5); //setează procentul agenției de turism la 5%
console.log(tour.getPriceNetto()); //afișează 15750 + 5% = 16537.5
