// let arr = [1,3,4,5,12,112];
// arr.sort(
//     // (a,b) => {
//     //     a-b
//     // }
// ); // this sort based on considering the numbers as strings
// console.log(arr); 


// let users = [

//     {
//         name:"deepak",
//         age: 21,
//     },

//     {
//         name:"umesh",
//         age: 24,
//     },

//     {
//         name:"bhanu",
//         age: 22,
//     },

//     {
//         name:"varshith",
//         age: 20,
//     },

// ];

// // console.log(users);

// let x =users.sort((a,b) => {

//     return b["age"]-a["age"];
// })

// console.log(users,x);

// // to extract only namess

// let names = users.map(user => user.name);
// console.log(names);

/// strings

// let name = 'Deepak';

// let wave = `hi, ${name}`; // template string

// console.log(wave);


let arr = [4,2,1,2]; // sequence of elements
let str = 'deepak';

console.log(arr.length,str.length)
console.log(arr[6],str[10]);
str[0] = 'D'; // it wont do anything.since in js strings are immutable

//slice is common method in both arrays and strings
// plice method is not applicable to strings.

console.log(str.charAt(2));
str = '  ab  c   ';

console.log(str.trim());// only start and end spaces are removed.
console.log(str.trimEnd()); // only start spacesare removed
str = '3,4,5,6';
let nums = str.split(',').map(a => Number(a));
console.log(nums);

str = "Hello World!";
let newStr = str.replace('llo','ll'); // only first instance substr is replaced.
console.log(str,newStr);

// to do replace all that occurences

/**
 * Regular Expressions
 */

str = "Hello World! yeLLow";
// console.log(str.indexOf('llo'));
let regexp = /llo/gi; // if g is added then everyone will be replaced
// if i is added it will reject case-sensitiveness

let finStr = str.replace(regexp,'X'); // this also does for only first occurence

console.log(finStr);

// Special characters

/**
 * 
 * dot (.) => any one char.
 * asterisk (*) => 0 or more preceeding chars.
 * plus(+) => 1 or more preceeding chars.
 * ? => 0 or 1 preceeding chars.
 */

str = ' I am aravind. ar raraa raaaa'
regexp = /ra*/g;
console.log(str.match(regexp));