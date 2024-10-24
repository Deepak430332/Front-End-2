/**
 * block scope
 * closures
 * objects (references)
 */

let a = 20;
let b = 100;
let f = function (a,b) {
    console.log(a+b);

    let f1 = () =>{
        let b = 30;
        console.log(a+b);
    }

    return (a-b,f1);
}

let res = f(a+2,a+4);
console.log(res);
