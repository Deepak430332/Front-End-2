
/**
 * block scope
 * closures
 * objects (references)
 */

// let a = 20;
// let b = 100;
// let f = function (a,b) {
//     console.log(a+b);

//     let f1 = () =>{
//         let b = 30;
//         console.log(a+b); // this cant be printed because this function is not called.
//                           // only f1 variable is eclared hence function is printed.
//     }

//     return (a-b);
// }

// let res = f(a+2,a+4);
// console.log(res);

// block scope --> variables inside loops, conditional statements

/**
 * block ? {} excluding ufunctions. code inside curly braces 
 * let and const declared variables are block scoped. these are accessed only inside 
 * a block.
 * 
 * var and function declarations are not block scoped they are context scope(containers in callstack).
 */

// if(true){

//     // block of code
// }
// console.log(a);
// if(true){

//     var a = 200;
//     let b = 100;

//     console.log(a+b);
// }

// console.log(a);
// // console.log(b);


// console.log(c);


// if(false){

//     var c = 100;
// console.log(c);

// }

// console.log(c);


function callme(){

    console.log(a);

    if(true){

        var a = 200;
    let b = 100;

    console.log(a+b);
    }
    a++;
    console.log(a);
}

let a = 30;
callme();
console.log(a);

let users = {
    name:"deepak",
    age: 20,

}
// let x = {...users};
// let y = users;
// y['name'] = 'Deepak';

// x['age'] = 22;
// console.log(x,users,y);

let arr = [1,2,3,4];
let [z,x,y] = arr;
console.log(x,y,z);