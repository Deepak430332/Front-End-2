/**
 * Execution flow of a javascript engine
 * 
 * local line --> if a line of code present ina function is called local statement.
 * 
 * global line --> viceversa
 * 
 * if a variavlke is eclared as a global line thats called as global variable.
 * 
 * whenever a variable doesnt contain in a container it checks wiht lexical parental container
 * 
 * 
 * regexp --> wordcharacter
 */

let a = 20; // global

function callme(x,y){  // global statement

    let a = 10; // local
    console.log(a+x+y); // local 
}

callme(a,2*a);// global
console.log(a);// value gets changed if a is reinitialised in function