const distance = 1500;
const budget = 175;
const fuelCost = 3;
let fuel;
let speed = 55;

switch (speed) {
  case 55:
    mile = 30;
    break;
  case 60:
    mile = 28;
    break;
  case 75:
    mile = 23;
    break;
  default:
    mile = 0;
    break;
}

// How many gallons of fuel will you need for the entire trip?

console.log(`the fuel you need for this speed is: ${mile} miles`);

let gallons = distance / mile;

console.log(`the gallons you need for this speed in total is: ${gallons}`);

let totalFuelCost = gallons * fuelCost;

console.log(`fuelcost:${totalFuelCost}`);

// Will your budget be enough to cover the fuel expense?

if (totalFuelCost <= budget) {
  console.log("Yes! your budget is enough for this trip");
} else {
  console.log("No! your budget is Not enough for this trip!");
}

// How long will the trip take, in hours?
let totalHours = distance / speed;

console.log(`it will take ${totalHours} hours to make this trip`);
