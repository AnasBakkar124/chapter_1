/*

let age = 25;
let year = 2022;
console.log(age,year);


age = 30;
console.log(age);

const point = 100;
console.log(point);

var score = 75;
console.log(score);

*/


// String

/* 
console.log('Hello, World');

let email = "anasbakkar.official@outlook.com";
console.log(email);

// String concatenation

let firstName = 'Muhammad';
let lastName = 'Anas';

let fullName = firstName + ' ' +     lastName

console.log(fullName);


// Getting character take charater....from number position

console.log(fullName[0]);

// string length

console.log(fullName.length);


// string method

console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result, fullName);


let index = email.indexOf('@'); 
console.log(index);

*/

//let email = 'anasbakkar.official@outlook.com';
//let result = email.indexOf('n');

/*let result = email.slice(0,5);
console.log(result);
*/



/*let Email = 'anasbakkar.official@outlook.com';
let Result = Email.substr(4,10);
console.log(Result);
*/

//let resul = email.replace('a','m');
//console.log(resul);


let radius = 10;
const pi = 3.14;

//console.log(radius, pi);  

// Math operators

//console.log(10/2);

//let result = radius % 3;

//let result = pi * radius**2;

// order of operation -- B I D M A S


//let result = 5 * (10-3)**2;f


//let likes = 10;
//likes = likes + 1;

//likes++;

//likes += 10;
//likes -= 5;
//likes *= 2;
//likes /=2;

//console.log(likes);


//console.log(result);


// NAN ---- Not a number

//console.log(5/'hello');   ----> error
//console.log(5*'hello');   ---->error


//let result = 'the blog has ' + likes + ' likes';

//console.log(result);





// template string

const title = 'Best reads of 2019';
const author = 'Mario';
const likes = 30;

//concatenation way

//let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes ';
//console.log(result); 

// template string way  

//let result = `The blog called ${title} by ${author} has ${likes} likes`;
//console.log(result);


//creating HTML templates

/*
let html = `
    <h2>${title}</h2>
    <p>${author}</p>
    <span>This blog has ${likes} likes</span>
`;

console.log(html);

*/


let ninjas = ['taha', 'shayan', 'abdullah']
//ninjas[1] = 'ken';

//console.log(ninjas[1]); 


//let ages = [20,25,30,35];
//console.log(ages[2]);

//let random = ['diamond', 'gold', 'silver', 30, 20];

//console.log(random);

//console.log(ninjas.length);

// Array Methods


//let result = ninjas.join(',');


//let result = ninjas.indexOf('abdullah');
//let result = ninjas.concat(['anas,', 'abdullah']);


let result = ninjas.push('kamran', 'yaseen', 'anas');

result = ninjas.pop(); 
console.log(result);