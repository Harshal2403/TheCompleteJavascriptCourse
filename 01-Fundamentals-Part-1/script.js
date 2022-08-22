/*
let js = 'amazing';
//if(js === 'amazing') alert("Javascript is FUN!");
//40 + 8 + 23 - 10
console.log(40 + 8 + 23 - 10);

console.log("Harshal");
console.log(24);

let firstName = "Happy";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "coder";
let myCurrentJob = "teacher";

console.log(myFirstJob);
*/

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'happy');

javascriptIsFun = 'Yes!';
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2022;
console.log(typeof year);
*/

/*
let age = 22;
age = 23;

const birthYear = 1999;
//birthYear = 2000;
//const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Parate';
console.log(lastName);
*/

/*
const now = 2037;
const ageHerbal = now - 1999;
const ageSarah = now - 2018;
console.log(ageHerbal, ageSarah);

console.log(ageHerbal * 2, ageHerbal / 10, 2 ** 3);
//2 ** 3 <=> 2 raised to the power 3
const firstName = 'Harshal';
const lastName = 'parate';
console.log(firstName + ' ' + lastName);

let x = 10 + 5;
x += 10; // x = x + 10
x *= 4;  // x = x * 4
x++;     // x = x + 1
x--;     // x = x - 1
console.log(x);

console.log(ageHerbal > ageSarah);
console.log(ageSarah >= 18);

const isLegalAge = ageSarah >= 18;
console.log(isLegalAge);

console.log(now - 1999 > now - 2018);
*/

/*
const now = 2037;
const ageHerbal = now - 1999;
const ageSarah = now - 2018;
console.log(now - 1999 > now - 2018);

let x,y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageHerbal + ageSarah)/2;
console.log(ageHerbal , ageSarah, averageAge);
*/
/*
const firstName = 'Harshal';
const job = 'associate';
const birthYear = 1999;
const year = 2022;

const parate = "I'm " + firstName + ', a ' + (year - 
   birthYear) + ' years old ' + job + '!';
console.log(parate);

const parateNew = `I'm ${firstName}, a ${year - 
   birthYear} years old ${job}!`;
console.log(parateNew);

console.log(`regular string`);

console.log('String with \n\
multiple \n\
lines');
console.log(`String
multiple
lines`);
*/
/*
const age = 16;
const isOldEnough = age >=18;

if(isOldEnough) {
   console.log('Sarah can start driving licence');
}
else{
   const yearsLeft = 18 - age;
   console.log(`Sarah is too young. Wait another ${yearsLeft} years :|`);
}

const birthYear = 1999;
let century;
if(birthYear <= 2000) {
   century = 20;
}
else {
   century = 21;
}
console.log(century);
*/
/*
const inputYear = '1999';
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18, Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

console.log('i am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1;
n = n - 1;
console.log(n);
console.log(2 + 3 + 4 + '5');
*/

//5 falsy values: 0, '', undefined, null, NaN
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Parate'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 22400;
if(money) {
   console.log("Don't spend it all !!");
}
else {
   console.log('You should get a job !!');
}

let height=0;
if(height || height===0) {
   console.log('YAY! height is defined');
}
else {
   console.log('Height is UNDEFINED');
}
*/
/*
const age = '18';
if(age === 18) console.log("You just became an adult (strict)");

if(age == 18) console.log("You just beacame an adult (loose)");

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if(favourite === 11) {
   console.log('Cool! 11 is an amazing number');
} else if(favourite === 8) {
   console.log('Cool! 8 is an amazing number');
} else {
   console.log('Number is not 11 or 8');
}

if(favourite !== 11) console.log('Why not 11?');
*/
/*
const hasDriversLicense = false;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasGoodVision || hasDriversLicense);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;
if(shouldDrive) {
   console.log('Sarah is able to drive');
}
else {
   console.log('Someone else should drive');
}

const isTired = true;
console.log(hasGoodVision || hasDriversLicense || isTired);

if(hasDriversLicense && hasGoodVision && !isTired) {
   console.log('Sarah is able to drive');
}
else {
   console.log('Someone else should drice...');
}
*/
/*
const day = 'wednesday🤣😂';

switch(day) {
   case 'monday':
      console.log('Plan course structure');
      console.log('Go to coding class');
      break;
   case 'tuesday':
      console.log('Prepare theory videos');
      break;
   case 'wednesday':
      console.log('write code');
   case 'thursday':
      console.log("write code examples");
      break;
   case 'friday':
      console.log('Record videos');
      break;
   case 'saturday':
   case 'sunday':
      console.log('Enjoy the weekend');
      break;
   default:
      console.log('Not a valid day');
}
*/
/*
const age = 23;
//age >= 18 ? console.log('I like to drink Artic🍸🍸') : console.log('I like to drink sprite'); 

const drink = age >= 18 ? 'arctic' : 'sprite';
console.log(drink);

let drink2;
if(age >= 18) {
   drink2 = 'arctic';
}
else {
   drink2 = 'sprite';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'arctic' : 'sprite'}`);
*/
