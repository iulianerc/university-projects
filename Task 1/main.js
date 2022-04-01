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
}

const tour = new Tour('Turkey', 1500, 7, 750);
console.log(tour.name); //afișează ' Turkey'
console.log(tour.costOneDay); //afișează 1500
console.log(tour.days); //afișează 7
console.log(tour.insurance); // afișează 750
console.log(tour.getPrice()); //afișează 11250 = 1500*7+750
