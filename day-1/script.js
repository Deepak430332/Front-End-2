// data types

// 1.should start with $,_,alphabets
// 2. can contain $,_, alphabets and numbers
console.log(2 === "2") //compares value and datatypes
console.log(2 == "2") // compares the values and doesn't care about data types.

// for,while, do-while

// let a =10;
// const b = 20;
// var c = 30;

// // b = 2;
// console.log(a,b,c);
// console.log(d); // can be accesed as undefined

// var d=100;// 

//hoisting

// console.log(a);
// var a= 20;
// console.log(a+10);
// let b = 30;
// console.log(a+b);

/* js engine is worked in two phases. phase-1(creation) and ahse-2(execution)
creation --> varibales will be used with same data
whenerver we run a piece of code it goes through two phases
1. creation --> all code will be scanned and figures out the variables and these varibales will be initialised with some data.
    --> the process of allocation of data after code gets scanned is called hoisting.
    --> variables which are declared with let,var,const eill beinitialsised with undefined values.
    -> variables which are declared with let and const will be kept inside temporal dead zone(TDZ).
    --> variables which are declared with function values are assigned/initalised with actuall values. (fully hoisted)
    --> when value is inside a tdz if we access it will throw an error before initialisation.
2. exectuion --> gets executed line by line.
*/

let b =100;
console.log(a+b);
var a = 200;
const c = 20;
console.log(c+a+b);

console.log(2+ +"4")
console.log(2+"+4")
console.log(2+ + + "5")

console.log(20+'$')
// console.log(20+$)

// Basics of functions

/*

    A function is a piece of code which can used whenever we need it.
*/

function abc(a,b){

    // a and b are parameters

    return (a+b)+(a-b)+(a/b)+(a*b);

}

let ans = abc(a,b); // here a and b are arguments
console.log(ans);

function add(a,b){

    console.log(a,b);

    return 10;
}

a = 10;
b = 20;

let res = add(a);
console.log(res)

/**
 * functions in javascript are varailes only thier naming conventions should follow the variable
 * naming convention
 */

console.log(add()) // add is different from add()


// good practice is use let and const not var. crating anonyms functions and 
// assigning a variable
// in react we mostly use annoymous functions
const callme = function(x,y){

    return x*y;
}

let r = callme(10,20);
console.log(r)

// take inpur from the useer

let x = prompt();
console.log(x);