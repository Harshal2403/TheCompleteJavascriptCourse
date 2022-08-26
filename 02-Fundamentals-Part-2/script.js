'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log('I can drive :)');

// const interface = 'Audio';
// const private = 534;

function logger() {
   console.log("My pet dog's name is Happy!");
}

// calling / running/ invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
   console.log(apples, oranges);
   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
   return juice;
}
const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);

const num = Number('23');
*/
/*
function calcAge1(birthYear) {
   return 2022 - birthYear;
}

console.log(calcAge1(1999));

//Anonymous function
const calcage2 = function (birthYear) {
   return 2022 - birthYear;
}

console.log(calcage2(1999));
*/
/*
//Function expression
const calcage2 = function (birthYear) {
   return 2022 - birthYear;
}

//Arrow function
const calcage3 = birthYear => 2022 - birthYear;
console.log(calcage3(1999));

const yearUntilRetirement = (birthYear, firstName) => {
   const age = 2022 - birthYear;
   const retirement = 65 - age;
   return `${firstName} retires in ${retirement} years`;
//   return retirement;
}

console.log(yearUntilRetirement(1999, 'Harshal'));
console.log(yearUntilRetirement(2001, 'Aabha'));
*/
/*
function cutFruitPieces(fruit) {
   return fruit * 4;
}

function fruitProcessor(apples, oranges) {
   const applepieces = cutFruitPieces(apples);
   const orangePieces = cutFruitPieces(oranges);

   const juice = `Juice with ${applepieces} pieces of apple and ${orangePieces} pieces of oranges.`
   return juice;
}

console.log(fruitProcessor(2,3));
*/
/*
const calcAge = function(birthYear) {
   return 2022 - birthYear;
}
const yearUntilRetirement = function (birthYear, firstName) {
//   const age = 2022 - birthYear;
   const age = calcAge(birthYear);
   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
   if(retirement > 0) {
      console.log(`${firstName} retires in ${retirement} years`);
      return retirement;
   } else {
      console.log(`${firstName} has already retired!! `);
      return -1;
   }
}

console.log(yearUntilRetirement(1999, 'Harshal'));
console.log(yearUntilRetirement(1950, 'AbbaDabba'));
*/
/*
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Aabha', 'Parmal', 'Godhaman'];
console.log(friends);

const y = new Array(1996, 1999);
console.log(y[0]);

console.log(friends[2], friends.length);
console.log(friends[friends.length-1]);

friends[2] = 'jay';
console.log(friends);
// friends = ['Aman', 'Chaman'];

const firstName = 'Harshal';
const harshal = [firstName , 'Parate', 2022 - 1999, 'Associate', friends];
console.log(harshal);
console.log(harshal.length);

// exercise 
const calcAge = function (birthYear) {
   return 2022 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
const age4 = calcAge(years[3]);

console.log(age1, age2, age3, age4);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2]),calcAge(years[3])];
console.log(ages);
*/
/*
const friends = ['Aabha', 'Parmal', 'Godhaman'];
// add element at last as well as returns new length
const newLength = friends.push('Nagin');
console.log(newLength, friends);
// add element at start
friends.unshift('Bhamori');
console.log(friends);
//removes last element and returns removed element
const removedOne = friends.pop();
console.log(removedOne, friends);
// removes first
friends.shift();
console.log(friends);

console.log(friends.indexOf('Parmal'));
console.log(friends.indexOf('Nagin'));

friends.push(22);
console.log(friends.includes('Bhamori'));
console.log(friends.includes('Godhaman'));
console.log(friends.includes('22'));

if(friends.includes('Aabha')) {
   console.log('You have a friend called Aabha');
}
*/
/*
const harshal = {
   firstName : 'harshal',
   lastName : 'Parate',
   age : 2022 - 1999,
   job : 'associate',
   friends : ['Aabha', 'Parmal', 'Nagan']
};

console.log(harshal);

console.log(harshal.lastName);
console.log(harshal['lastName']);

const nameKey = 'Name';
console.log(harshal['first' + nameKey]);
console.log(harshal['last' + nameKey]);
// console.log(harshal.'last' + nameKey);

const interestedIn = prompt('What do you want to know about Harshal? Choose between firstName, lastName, age, job, and friends');

if(harshal[interestedIn]) {
   console.log(harshal[interestedIn]);
} else {
   console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

harshal.location = 'India';
harshal['instagram'] = '_harshl_24';
console.log(harshal);

console.log(`${harshal.firstName} has ${harshal.friends.length} friends, and his best friend is named ${harshal.friends[0]}`);
*/
/*
const harshal = {
   firstName : 'harshal',
   lastName : 'Parate',
   birthYear : 1999,
   job : 'associate',
   friends : ['Aabha', 'Parmal', 'Nagan'],
   hasDriversLicense : true,

   // calcAge: function (birthYear) {
   //    return 2022 - birthYear;
   // }

   // calcAge: function () {
   //    //console.log(this);
   //    return 2022 - this.birthYear;
   // }

   calcAge: function () {
      this.age =  2022 - this.birthYear;
      return this.age;
   },

   getSummery: function() {
      return `${this.firstName} is a ${this.calcAge()}-years old ${this.job}, and he ${this.hasDriversLicense ? "has" : "don't have"} a driver's license`;
   }
};

console.log(harshal.calcAge());

console.log(harshal.age);
console.log(harshal.age);
console.log(harshal.age);
//console.log(harshal['calcAge'](1999));

console.log(harshal.getSummery());
*/
/*
for(let rep = 1; rep <= 10; rep++) {
   console.log('Lifting weights repetition : ' + rep);
} 
*/
/*
const harshal = ['harshal', 'Parate', 2022 - 1999, 'associate', ['Aabha', 'Parmal', 'Nagan']];

const types = [];

for(let i = 0; i < harshal.length; i++) {
   console.log(harshal[i], typeof harshal[i]);

   //types[i] = typeof harshal[i];
   types.push(typeof harshal[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for(let i=0; i < years.length; i++) {
   ages.push(2022 - years[i]);
}
console.log(ages);

console.log('--- ONLY STRINGS ---');
for(let i=0; i< harshal.length; i++) {
   if(typeof harshal[i] !== 'string') continue;

   console.log(harshal[i], typeof harshal[i]);
}

console.log('--- BREAK WITH NUMBER ---');
for(let i=0; i< harshal.length; i++) {
   if(typeof harshal[i] === 'number') break;

   console.log(harshal[i], typeof harshal[i]);
}
*/
/*
const harshal = [
   'Harshal',
   'Parate',
   2022 - 1999,
   'associate',
   ['Godhaman','Parmal','Nagan']
];

for(let i = harshal.length -1 ; i >= 0; i--) {
   console.log(i, harshal[i]);
}

for(let exercise = 1; exercise < 4; exercise++) {
   console.log(`--------- Starting exercise ${exercise}`);

   for(let rep = 1; rep < 6; rep++) {
      console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
   }
}
*/

// for(let rep = 1; rep <= 10; rep++) {
//    console.log(`FOR: Lifting weights repetition ${rep}`);
// }

// let rep = 1;
// while (rep <=10) {
//    console.log(`WHILE: Lifting weights repetition ${rep}`);
//    rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while(dice !== 6) {
//    console.log(`You rolled a ${dice}`);
//    dice = Math.trunc(Math.random() * 6) + 1;
//    if(dice === 6) console.log('Loop is about to end...');
// }
