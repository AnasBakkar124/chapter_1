//Booleans and comaprision


console.log(true, false, "true", "false"); 


//Methods can return booleans


let email = "kamranmama123@gmail.com";
let names = ['Abdullah', 'Anas', 'Shayan'];

//let result = email.includes("!");
let result = names.includes('Shayan');

console.log(result);


/*
let mail = "abdullah123@gmail.com";
let result = mail.includes('!');
console.log(result);
*/



// comparision operators

let age = 25;


console.log(age == 25);
console.log(age == 30);
console.log(age != 30);
console.log(age > 20);
console.log(age < 20);
console.log(age <= 25);
console.log(age >=25);


let name = 'shaun';

console.log(name == "shaun");
console.log(name == "Shaun");
console.log(name > 'crystal'); 
console.log(name > 'Shaun');
console.log(name > 'Crystal');



// Loose comparision

console.log(age == 25); 
console.log(age == "25");
console.log(age != 25);
console.log(age != "25");



// strict comparision

//console.log(age === "25");
console.log(age === 25);
console.log(age === "25");  
console.log(age !== 25);
console.log(age !== "25");
