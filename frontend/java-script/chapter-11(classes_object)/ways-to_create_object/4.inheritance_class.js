// inheritence in class:Class inheritance in JavaScript means one class (child) can acquire the properties and methods of another class (parent) using the extends keyword.

//Child class = subclass
//Parent class = superclass

class Car {
  constructor(speed,price,brand) {
    this.speed = speed;
    this.price= price;
    this.brand=brand;
  }

  start() {
    console.log(`${brand} is starting...`);
  }
  stop() {
    console.log(`${brand} car is stopping...`);
  }
}


//Sports car has all features of Car + extra:

class sportsCar extends Car {
  constructor(brand, speed,price,turbo) {
    super(brand,price, speed);   // Inherit properties from Car
     this.turbo = turbo;        // special property
  }

  activateTurbo() {
    console.log(`${this.brand} turbo activated! +${this.turbo} HP boost!`);
  }

  showSportInfo() {
    console.log(
      `Brand: ${this.brand}, HP: ${this.horsepower}, 0-100: ${this.zeroToHundred}s, Turbo: ${this.turbo} HP`
    );

}
}

let bmw=new sportsCar("bmw",200,39000,true)
console.log(bmw)



