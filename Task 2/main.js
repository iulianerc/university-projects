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

const tours = [];

tours.push(new Tour('Turkey', 1500, 7, 750));
tours.push(new Tour('Ukraina', 1, 99999000001, 0));

tours.forEach((tour) => {
  console.log(`Tour ${tour.name} for ${tour.getPrice()} MDL`)
})
