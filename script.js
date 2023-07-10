// ************** Variables & Datatypes ***************//

//**** A: Q + A **** *//
/**
 *  Q1. How do we assign a value to a variable?
 *  A1. We assign a variable with the '=' operator.
 *      let num = 20;
 *
 *
 *  Q2. How do we change the value of a variable?
 *  A2. We change the value of a variable with the '=' operator
 *      let num = 20;
 *      num = 10; //now num is equal to 10 and not 20
 *
 *
 *  Q3. How do we assign an existing variable to a new variable?
 *  A3. We can do this as:
 *      let num1 = 25;
 *      let numb2 = num1;
 *
 *
 *  Q4. Remind me, what are 'declare', 'assign', and 'define'?
 *  A4a. 'declare' is to instantiate a reference to a variable (var, let, or const)
 *  A4b. 'assign' is to equate a variable to a value (string, number, boolean, etc...)
 *  A4c. 'define' is to the variable a name/label (firstName, numb1, bothAreEqual)
 *
 *
 *  Q5. What is pseudocoding and why should you do it?
 *  A5. Pseudocode is an informal way of programming by describing the outline of steps in which a should run. We should use pseudocode to make it easier for others to understand how a program should work; without involving any confusing coding syntax.
 *
 *
 * Q6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
 * A6. A common practice is to use the '70/30' rule. Seventy percent of th time should be spent on thnking and planning, while the remaining thirty percent is writing the actual code
 *
 */

//**** B: Strings **** */
// 1. Create a variable called firstVariable
let firstVariable;

// 2. Assign it the value of the string "Hello World"
firstVariable = 'Hello World';

// 3. Change the value of this variable to some number
firstVariable = 10;

// 4. Store value of firstVariable in a new variable called secondVariable
let secondVariable = firstVariable;

// 5. Change the value of secondVariable to any string.
secondVariable = 'The value of secondVariable is now a string.';

// 6. What is the value of firstVariable
// The value of firstVariable is '10'

// 7. Create a variable called yourName and set it equal to your name as a string. Then write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
let yourName = 'De Sean Ward';
console.log(`Hello, my name is ${yourName}`);

//**** C: Booleans **** */
/**
 * Using the provided variable definitions, replace the blanks so that all log statements print true in the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console
 */
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');

// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false === false || (false === false && false !== true));
console.log(false === false);
console.log(e === 'Kevin');
console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 !== '48');

//**** D: The Farm **** */
// 1. Declare a variable 'animal'. Set it to be either 'cow' or something else
let animal = 'cow';

// 2. Write code that will print out 'mooooo' if the 'animal' is equal to 'cow'
if (animal === 'cow') console.log('mooooo');

// 3. Change your code so that if the variable 'animal' is any thing other than a cow, it will print "Hey! You're not a cow."
if (animal !== 'cow') console.log("Hey! You're not a cow.");
