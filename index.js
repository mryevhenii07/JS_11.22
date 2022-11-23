// class Stack {
//   maxElements;
//   items;

//   constructor(maxElements = 10) {
//     if (isNaN(parseInt(maxElements)) || maxElements < 0) {
//       throw new Error('Invalid limit value');
//     }

//     this.maxElements = maxElements;
//     this.items = [];
//   }

//   push(item) {
//     if (this.items.length >= this.maxElements) {
//       throw new Error('Limit exceeded');
//     }
//     this.items.push(item);
//   }

//   pop() {
//     if (this.items.length === 0) {
//       throw new Error('Empty stack');
//     }
//     return this.items.pop();
//   }

//   peek() {
//     return this.items[this.items.length - 1] || null;
//   }

//   isEmpty() {
//     return this.items.length === 0;
//   }

//   toArray() {
//     return [...this.items];
//   }

//   static fromIterable(iterable) {
//     if (!Array.isArray(iterable)) {
//       throw new Error('Not iterable');
//     }

//     const createdStack = new Stack(iterable.length);
//     iterable.forEach((item) => {
//       createdStack.push(item);
//     });

//     return createdStack;
//   }
// }

// class Car {
//   #brand;
//   #model;
//   #yearOfManufacturing;
//   #maxSpeed;
//   #maxFuelVolume;
//   #fuelConsumption;
//   #damage;
//   #currentFuelVolume = 0;
//   #isStarted = false;
//   #mileage = 0;
//   #health = 100;

//   start() {
//     if (this.#isStarted) {
//       throw new Error('Car has already started');
//     }
//     this.#isStarted = true;
//   }

//   shutDownEngine() {
//     if (!this.#isStarted) {
//       throw new Error("Car hasn't started yet");
//     }
//     this.#isStarted = false;
//   }

//   fillUpGasTank(updatedGas) {
//     if (isNaN(parseInt(updatedGas)) || updatedGas <= 0) {
//       throw new Error('Invalid fuel amount');
//     }
//     if (this.#health < updatedGas) {
//       throw new Error('Too much fuel');
//     }
//     if (this.#isStarted) {
//       throw new Error('You have to shut down your car first');
//     }
//     return (this.#currentFuelVolume = updatedGas);
//   }

//   drive(updatedMileage, updateHours) {
//     if (isNaN(parseInt(updatedMileage)) || updatedMileage <= 0) {
//       throw new Error('Invalid speed');
//     }
//     if (isNaN(parseInt(updateHours)) || updateHours <= 0) {
//       throw new Error('Invalid duration');
//     }
//     if (updatedMileage > this.#maxSpeed) {
//       throw new Error("Car can't go this fast");
//     }
//     if (this.#isStarted) {
//       throw new Error('You have to start your car firs');
//     }
//     if (this.#currentFuelVolume <= 0) {
//       throw new Error("You don't have enough fuel");
//     }
//     if (this.#health <= 0) {
//       throw new Error('Your car won’t make it');
//     }
//   }

//   repair(updatedRepair) {
//     if (this.#isStarted) {
//       throw new Error('You have to shut down your car first');
//     }
//     if (updatedRepair !== this.#health) {
//       throw new Error('You have to fill up your gas tank first');
//     }
//     return (this.#health = updatedRepair);
//   }

//   getFullAmount(updatedAmount) {
//     if (updatedAmount < this.#health) {
//       return this.#health - updatedAmount;
//     }
//     if (updatedAmount === this.#health) {
//       return 0;
//     }
//   }

//   set brand(updatedBrand = '') {
//     if (updatedBrand.length < 1 || updatedBrand.length > 50) {
//       throw new Error('Invalid brand name');
//     }
//     this.#brand = updatedBrand;
//   }

//   set model(updatedModel = '') {
//     if (updatedModel.length < 1 || updatedModel.length > 50) {
//       throw new Error('Invalid model name');
//     }
//     this.#model = updatedModel;
//   }

//   set yearOfManufacturing(updatedYear = 1950) {
//     if (updatedYear < 1950 || updatedYear > new Date().getFullYear()) {
//       throw new Error('Invalid year of manufacturing');
//     }
//     this.#yearOfManufacturing = updatedYear;
//   }

//   set maxSpeed(updatedSpeed = 100) {
//     if (updatedSpeed < 100 || updatedSpeed > 330) {
//       throw new Error('Invalid max speed');
//     }
//     this.#maxSpeed = updatedSpeed;
//   }

//   set maxFuelVolume(updatedVolume = 20) {
//     if (updatedVolume < 20 || updatedVolume > 100) {
//       throw new Error('Invalid max fuel volume');
//     }
//     this.#maxFuelVolume = updatedVolume;
//   }

//   set fuelConsumption(updatedFuel = 1) {
//     if (updatedFuel < 1) {
//       throw new Error('Invalid fuel consumption');
//     }
//     this.#fuelConsumption = updatedFuel;
//   }

//   set damage(updatedDamage = 1) {
//     if (updatedDamage < 1 || updatedDamage > 5) {
//       throw new Error('Invalid damage');
//     }
//     this.#damage = updatedDamage;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   get model() {
//     return this.#model;
//   }

//   get yearOfManufacturing() {
//     return this.#yearOfManufacturing;
//   }

//   get maxSpeed() {
//     return this.#maxSpeed;
//   }

//   get maxFuelVolume() {
//     return this.#maxFuelVolume;
//   }

//   get fuelConsumption() {
//     return this.#fuelConsumption;
//   }

//   get damage() {
//     return this.#damage;
//   }
// }
// console.log(new Car().drive(70, 1111));
