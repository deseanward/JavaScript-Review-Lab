// ************** Variables & Datatypes ***************//

//**** A: Q + A **** *//
console.log('/***** A. Q + A *****/');
console.log(`/**
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
 *  A4c. 'define' is to give the variable a name/label (firstName, numb1, bothAreEqual) and value. With functions, you define it by supplying a block of code to execute; along with any applicable parameters.
 *
 *
 *  Q5. What is pseudocoding and why should you do it?
 *  A5. Pseudocode is an informal way of programming by describing the outline of steps in which a should run. We should use pseudocode to make it easier for others to understand how a program should work; without involving any confusing coding syntax.
 *
 *
 * Q6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
 * A6. A common practice is to use the '70/30' rule. Seventy percent of th time should be spent on thnking and planning, while the remaining thirty percent is writing the actual code
 *
 */`);

//**** B: Strings **** */
console.log('/********** B: Strings **********/');
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
console.log(' ');

//**** C: Booleans **** */
console.log('/********** C: Booleans **********/');
/**
 * Using the provided variable definitions, replace the blanks so that all log statements print true in the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console
 */
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log('a < b', a < b);
console.log('c > d', c > d);
console.log("'Name' === 'Name'", 'Name' === 'Name');

// FOR THE NEXT TWO, USE ONLY && OR ||
console.log('// FOR THE NEXT TWO, USE ONLY && OR ||');
console.log('true || false', true || false);
console.log(
	'false === false || (false === false && false !== true)',
	false === false || (false === false && false !== true)
);
console.log('false === false', false === false);
console.log("e === 'Kevin'", e === 'Kevin');
console.log('a + b === c', a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log('a * a === d', a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"

console.log("48 !== '48'", 48 !== '48');
console.log(' ');

//**** D: The Farm **** */
console.log('/********** D: The Farm **********/');
// 1. Declare a variable 'animal'. Set it to be either 'cow' or something else
let animal = 'cow';

// 2. Write code that will print out 'mooooo' if the 'animal' is equal to 'cow'
if (animal === 'cow') console.log('mooooo');

// 3. Change your code so that if the variable 'animal' is any thing other than a cow, it will print "Hey! You're not a cow."
if (animal !== 'cow') console.log("Hey! You're not a cow.");

console.log(' ');

//**** E: Driver's Ed **** */
console.log("/********** E: Driver's Ed **********/");
// 1. Make a variable that holds a person's age; be semantic
const driversAge = 17;

// 2. Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
driversAge >= 16
	? console.log('Here are the keys')
	: console.log("Sorry, you're too young.");

console.log(' ');

/**
 //********************* Loops *******************
 */
console.log('/*********** Loops **********/');
//**** A: The Basics **** */
console.log('/********** A: The Basics ************/');
// 1. Numbers 1 - 10
console.log('/** Numbers 1 - 10 **/');
let nums2 = '';
for (let x = 0; x <= 10; x++) {
	nums2 += x + ', ';
}
console.log(nums2);
console.log(' ');

// 2. Numbers 10 - 400
console.log('/** Numbers 10 - 400 **/');
let nums3 = '';
for (let x = 10; x <= 400; x++) {
	nums3 += x + ', ';
}

console.log(nums3);
console.log(' ');

// 3. Every 3rd number from 12 - 4000
console.log('/** Every 3rd number 12 - 4000');
let nums = '';

for (let x = 12; x <= 4000; x += 3) {
	nums += x + ', ';
}

console.log(nums);
console.log(' ');

//**** B: Get Even **** */
console.log('/********** B: Get Even **********/');
// 1. Print numbers 1 - 100
console.log('/** Numbers 1 - 100 **/');
let num4 = '';
for (let x = 1; x <= 100; x++) {
	num4 += x + ', ';
}

console.log(num4);
console.log(' ');

//2 Every even number
console.log('/** Every even Number **/');
let even = '';
for (let x = 1; x <= 100; x++) {
	x % 2 == 0 ? (even += `${x} <-- is an even number, `) : (even += x + ', ');
}

console.log(even);
console.log(' ');

//**** C: Give Me Five **** */
console.log('/** Give Me Five **/');
let giveMe = '';
for (let x = 0; x <= 100; x++) {
	if (x !== 0) {
		// If x is a multiple of 5
		if (x % 5 === 0) giveMe += `I found a ${x}. Hi five!, `;

		// If x is a multiple of 3
		if (x % 3 === 0) giveMe += `I found a ${x}. Three is a crowd, `;
	}
}

console.log(giveMe);
console.log(' ');

//**** D: Savings account **** */
console.log('/***** D: Savings Account *****/');
let bankAccount = 0;

for (let x = 1; x <= 10; x++) {
	bankAccount += x;
}

//Check Bank Account
console.log('Check Bank Account');
console.log(bankAccount);

// Double Pay
for (let x = 1; x <= 100; x++) {
	bankAccount += x * 2;
}

//Check Bank Account
console.log('Double Pay - Check Bank Account');
console.log(bankAccount);
console.log(' ');
console.log(' ');

/**
 * //********************* Arrays & Control Flow ********************
 */
console.log('/********** Arrays & Control Flow **********/');
//**** A: Talk About It **** */
console.log('/***** A: Talk About It *****/');
// 1. The 'things' in an array are called 'elements'
// 2. Yes, the elements will be ordered by index
// 3. An array can hold real life things such as attributes of a person (name, age, eye color, birthday)
console.log(`// 1. The 'things' in an array are called 'elements'
// 2. Yes, the elements will be ordered by index
// 3. An array can hold real life things such as attributes of a person (name, age, eye color, birthday)`);

//**** B: Easy Does It *****/
console.log(/**** B: Easy Does It **** */);
const quotes = [
	'To be or not to be, that is the question',
	'I speak softly, but carry a big stick.',
	'To err, is to be human',
];
console.log(quotes);

//**** C: Accessing Elements **** */
console.log('/***** C: Accessing Elements *****/');
const randomThings = [1, 10, 'Hello', true];

//1. Access the 1st element
const el1 = randomThings[0];

//2. Change the value of 'Hello' to 'World'
randomThings[2] = 'World';

//3. Check the value
console.log(randomThings[2]);

//**** D: Changing Values **** */
const ourClass = ['Salty', 'Zoom', 'Sardine', 'Slack', 'Github'];

// 1. Access the 3rd element
const el3 = ourClass[2];

// 2. Change the value of 'Github' to 'Octocat'
ourClass[4] = 'Octocat';

// 3. Add a new element, 'Cloud City' to the array
ourClass.push('Cloud City');
console.log(ourClass);

//**** E: Mix It Up **** */
myArray = [5, 10, 500, 20];

// 1.
myArray.push('Aegon');
myArray.push('Doraq');
console.log(myArray);

// 2.
myArray.shift();
console.log(myArray);

// 3.
myArray.unshift('Bob Marley');
console.log(myArray);

// 4.
myArray.pop();
console.log(myArray);

// 5.
myArray.reverse();
console.log(myArray);
// Yes the array has been mutated. Mutate means to change the value or formating of an object. The '.reverse()' method return the elements of 'myArray' in reverse.

//***** F: Biggie Smalle **** */
let num = 8;

num < 100 ? console.log('little number') : console.log('big number');

//**** G: Monkey In The Middle **** */
num < 5
	? console.log('little number')
	: num > 10
	? console.log('big number')
	: console.log('monkey');

//**** H: What's In Your Closet? **** */
const kristynsCloset = [
	'left shoe',
	'cowboy boots',
	'right sock',
	'Per Scholas hoodie',
	'green pants',
	'yellow knit hat',
	'marshmallow peeps',
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
	[
		// These are Thom's shirts
		'grey button-up',
		'dark grey button-up',
		'light blue button-up',
		'blue button-up',
	],
	[
		// These are Thom's pants
		'grey jeans',
		'jeans',
		'PJs',
	],
	[
		// Thom's accessories
		'wool mittens',
		'wool scarf',
		'raybans',
	],
];

// 1. What's Kristyn wearing today?
console.log('Kristyn is rocking that ' + kristynsCloset[2] + ' today!');

// 2. Add 'raybans' after 'yellow knit hat'
kristynsCloset.splice(6, 0, 'raybans');
console.log(kristynsCloset);

// 3. Modify 'yellow knit hat'
kristynsCloset.splice(6, 1, 'stained knit hat');
console.log(kristynsCloset);

// 4. The first element in Tom's 'shirt' array
let shirt = thomsCloset[0][0];
console.log(shirt);

// 5. Item from pants array
let pants = thomsCloset[1][1];

// 6. Any element from Thoms array
console.log(thomsCloset[0][2]);

// 7. What Thom is wearing
console.log(
	`Tom is looking fierce in a ${shirt}, ${pants} and ${thomsCloset[2][1]}`
);

// 8. Thoms PJs
thomsCloset[1][2] = 'Footie Pajamas';
console.log(thomsCloset);
console.log(' ');
console.log(' ');

/**
 * ******************** IV Functions ********************
 */
console.log(' * ******************** IV Functions ********************');
console.log('/********** A. printGreeting **********/');

const printGreeting = name => {
	return `Hello there, ${name}!`;
};

console.log(printGreeting('Slimer'));
console.log(' ');

console.log('/*********** B. printCool **********/');
const printCool = name => {
	return `${name} is cool`;
};

console.log(printCool('Captain Reynolds'));
console.log(' ');

console.log('/*********** C. calculateCube **********/');
const calculateCube = num => {
	return num ** 3;
};

console.log(calculateCube(5));
console.log(' ');

console.log('/********** D: isVowel **********');
const vowels = ['a', 'e', 'i', 'o', 'u'];

const isVowel = v => {
	return vowels.includes(v.toLowerCase());
};

console.log(isVowel('a'));
console.log(' ');

console.log('/********** getTwoLengths **********');
const lengths = [];

const getTwoLengths = (param1, param2) => {
	lengths.push(param1.length);
	lengths.push(param2.length);

	return lengths;
};

console.log(getTwoLengths('Hank', 'Hippopopalous'));
console.log(' ');

console.log('/********** F. getMultipleLengths **********/');
const getMultipleLengths = arr => {
	let arrayOfLengths = [];
	arr.forEach(entry => arrayOfLengths.push(entry.length));

	return arrayOfLengths;
};

console.log(getMultipleLengths(['hello', 'what', 'is', 'up', 'dude']));
console.log(' ');

console.log('/********** G. maxOfThree **********/');
const maxOfThree = (n1, n2, n3) => {
	let largest = 0;

	n1 > n2
		? n1 > n3
			? (largest = n1)
			: (largest = n3)
		: n2 > n3
		? (largest = n2)
		: (largest = n3);

	return largest;
};

console.log(maxOfThree(6, 9, 1));
console.log(' ');
console.log(' ')


console.log('/********** H. printLongestWord **********/');
const printLongestWord = arr => {
	let longestWord = '';
	let idx = 0;
	let idx2 = 0;

	console.log("LET'S GET READY TO RUMBLE!!!");

	do {
		if (arr[idx].length === arr[idx2].length) {
			idx2++;
			longestWord = arr[idx];
			if (idx > 0)
				console.log(
					`It's a draw - ${longestWord} still remains champion!`
				);
		} else if (arr[idx].length > arr[idx2].length) {
			idx2++;
			longestWord = arr[idx];
			console.log(`${longestWord} is declared winner!`);
		} else {
			idx++;
			longestWord = arr[idx2];
			console.log(
				`WHAT AN UPSET!!! ${longestWord} has just DESTROYED ${
					arr[idx - 1]
				}!!!`
			);
		}

		console.log(' ');
		longestWord && longestWord.length > arr[idx].length
			? console.log(`Title Bout: "${longestWord}" vs "${arr[idx]}"`)
			: console.log(`Upcoming Bout: "${longestWord}" vs "${arr[idx2]}"`);
	} while (idx < arr.length - 1 && idx2 < arr.length - 1);

	return `And the winner is, and still undefeated... **** ${longestWord} **** - longest word of them all.`;
};

console.log(
	printLongestWord([
		'BoJack',
		'Princess',
		'Diane',
		'a',
		'Max',
		'Peanutbutter',
		'big',
		'Todd',
	])
);

console.log(' ');
console.log(' ');

/**
 * ******************** Objects ********************
 */
console.log('/********** Objects **********/');
console.log('/***** A. Make A User Object ****/');

const User = {
	name: 'William',
	email: 'willie@my-email.com',
	age: '21',
	purchased: [],
};

console.log(User);
console.log(' ');

console.log('/***** B: Update the User *****/');

User.email = 'willieDee@my-email.com';
User.age++;

console.log(User);
console.log(' ');

console.log('/***** C. Adding keys and values *****/');
User.location = 'Los Angeles';

console.log(User);
console.log(' ');

console.log('/***** D. Shopaholic! *****/');
User.purchased.push('carbohydrates');
User.purchased.push('peace of mind');
User.purchased.push('Merino jodhpurs');

console.log(User.purchased[2]);
console.log(' ');

console.log('/***** E. Object-Within-Object *****/');
User.friend = {
	name: 'John',
	age: 25,
	location: 'San Antonio, TX',
	purchased: [],
};

console.log(User.friend.name);
console.log(User.friend.location);

User.friend.age = '55';
User.friend.purchased.push('The One Ring');
User.friend.purchased.push('A latte');

console.log(User.friend.purchased[1]);
console.log(' ');

console.log("/***** F. Loops ****** */");
User.purchased.forEach(item => console.log(item));
console.log(' ');

console.log('/***** G. Functions Can Operate On Objects *****/');
function updateUser() {
	User.age++;
	User.name = User.name.toUpperCase();

	console.log(User);
}

updateUser();
console.log(' ');

function oldAndLoud(person) {
	person.age++;
	person.name = person.name.toUpperCase();

	console.log(person);
}

oldAndLoud(User);
console.log(' ');
