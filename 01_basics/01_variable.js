// variables

//const keyword
const age = 21
//age = 22 // we can not change the value of age variable because const keyword cannot be change once declared
console.log(age); // output : 21

/*
 let and const keyword most used . and var keyword not much used 
 var keyword issue in block scope and functional scope
*/

//let keyword
let accountEmail = "hc@gmail.com"
accountEmail = "aaaa@gmail.com"
console.log(accountEmail);  //output : aaaa@gmail.com

// undefiend variable 
let name;  
console.log(name);  // output : undefined