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
tours.push(new Tour('Ukraina 1', 1, 99999000001, 0));
tours.push(new Tour('Ukraina 2', 1, 99999000001, 0.55));
tours.push(new Tour('Ukraina 3', 2, 99999000001, 0));
tours.push(new Tour('Ukraina 4', 1.2, 99999000001, 0));
tours.push(new Tour('Ukraina 5', 1.8, 99999000001, 0));
tours.push(new Tour('Ukraina 6', 1.7, 99999000001, 0));

tours.forEach((tour) => {
  console.log(`Tour ${tour.name} for ${tour.getPrice()} MDL, ${tour.days} (days), ${tour.costOneDay} (one day cost), ${tour.insurance} insurance`)
})
