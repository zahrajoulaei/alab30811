const n1 = 5;
const n2 = 10;
const n3 = 3;
const n4 = 4;


//Check if all numbers are divisible by 5. Cache the result in a variable.

const allisDivisibleBy5 = (n1%5 ===0) &&(n2%5 ===0) &&(n3%5 ===0) && (n4%5 ===0) 
console.log(`all numbers are divisible by 5: ${allisDivisibleBy5}`);

//Check if the first number is larger than the last. Cache the result in a variable.

const firstNumberIsLargerThanLast = n1> n4 
console.log(`firs number is larger than last number: ${firstNumberIsLargerThanLast}`);

// Accomplish the following arithmetic chain:
// Subtract the first number from the second number.
// Multiply the result by the third number.
// Find the remainder of dividing the result by the fourth number.
const subed = n2-n1;
const multiplied = subed * n3;
const arithmeticChain = multiplied%n4;

console.log(`the chain changes happend to number and the result is:, ${arithmeticChain}`);

// Change the way that isOver25 calculates so that we do not need to use the NOT operator (!)
//  in other logic comparisons. 
// Rename the variable as appropriate.
// No number can be larger than 25,  so: 
const isOver25 = n1 > 25 && n2 > 25 && n3 > 25 && n4 > 25;

