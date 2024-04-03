// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = n1 + n2 + n3 + n4 == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 < 26 || n2 < 26 || n3 < 26 || n4 < 26;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique =
    n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis =
    n1 + n2 + n3 + n4 == 50 &&
    (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2 &&
    !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) &&
    n1 != n2 &&
    n1 != n3 &&
    n1 != n4 &&
    n2 != n3 &&
    n2 != n4 &&
    n3 != n4;

// START OF ASSIGNMENT

// Checking to see if a number is Divisible by 5
const n1DivisibleBy5 = !(n1 % 5 > 0);
const n2DivisibleBy5 = !(n2 % 5 > 0);
const n3DivisibleBy5 = !(n3 % 5 > 0);
const n4DivisibleBy5 = !(n4 % 5 > 0);

console.log(`It is ${n1DivisibleBy5}, ${n1} is divisible by 5`);
console.log(`It is ${n2DivisibleBy5}, ${n2} is divisible by 5`);
console.log(`It is ${n3DivisibleBy5}, ${n3} is divisible by 5`);
console.log(`It is ${n4DivisibleBy5}, ${n4} is divisible by 5`);

// Checking if a number is larger than another
const isLarger = n1 > n4;

console.log(
    `n1 value of ${n1}, is ${
        isLarger === true ? "greater than" : "less than"
    } the value of n4, which is ${n4}.`
);

// Arithmetic chain check for 0 remainder
const arithChain = ((n1 - n2) * n3) % n4;

console.log(arithChain);

// Planning a 1500 mile, trip cross-country. Below we are caluculating
// fuel needed, trip budget, and how long it will take.

const tripDistance = 1500;

// Speed of travel
let milesperhour1 = 55;
let milesperhour2 = 60;
let milesperhour3 = 75;

// Gallons needed
let milespergal1 = 30;
let milespergal2 = 28;
let milespergal3 = 23;

const budget = 175;
let avgFuelCost = 3;

const time1 = Math.round(tripDistance / milesperhour1);
const time2 = Math.round(tripDistance / milesperhour2);
const time3 = Math.round(tripDistance / milesperhour3);

const gallons1 = Math.round(tripDistance / milespergal1);
const gallons2 = Math.round(tripDistance / milespergal2);
const gallons3 = Math.round(tripDistance / milespergal3);

const cost55 = Math.round(gallons1 * avgFuelCost);
const cost60 = Math.round(gallons2 * avgFuelCost);
const cost75 = Math.round(gallons3 * avgFuelCost);

console.log(cost55);

console.log(
    `Traveling 1500 miles to my destination at 55mph I will need ${gallons1} gallons of fuel costing about $${cost55}, if traveling 60mph I would need ${gallons2} gallons costing about $${cost60} and lastly, traveling at 75mph I would need ${gallons3} gallons costing about $${cost75}.`
);

console.log(
    `It will take ${time1} hours at ${milesperhour1}mph, ${time2} hours at ${milesperhour2}mph, or ${time3} hours at ${milesperhour3}mph to reach our destination. 

Considering cost and time, it would be wise to travel at ${milesperhour2}mph to our destination. It will be the quickest option as well as within budget.`
);
