// call back function caling a function as argument

// function callme(a){

//     console.log(typeof a);
//     a();
// }

// let f = function(){

//     console.log("inside callback function");
// }

// callme(f);

/**
 * If a function takes or returns another function then it calls as
 * Higher Order Function (HOF).
 */

// Arrays higher order fucntions

/**
 * push,pop,shift,unshit,slplice, slice, join --> not higher order functions
 * 
 * foreach,map,filter, reduce,sort
 * 
 * forEach --> used to just iterate on entire array. it returns nothing (undefined).
 * 
 * 
 * map --> used to just iterate on entire array. returns object (array) which contains the returned values.
 * of the same length.
 * 
 * filter --> used to filter out on entire array. returns array which follows requried condition.  example like 
 * return even numbers
 */

let arr = [4,3,5,6];
arr.push(10);

// forEach is a HOF
// arr.forEach(function(a,b,c){
//     console.log(a,b,c);
//     // console.log('first');

//     // a--> elelemt
//     // b --> index
//     // c --> array itself

// }) // foreach returns nothing. it is used to iterate on the array for better readablity

// arr = [3,4,1,3, 19];
// function forEach(callback){

//     for(let i = 0; i < arr.length;i++){

//         callback(i,arr[i],arr);
//     }
// }

// let f = function(index,element,list){

//     console.log(index,element,list);
// }

// forEach(f);

// sum of even numbers in an array
let sum = 0;
arr.forEach(function(element)
{
    if(element % 2 == 0){

        sum += element;
    }

    
})

console.log(sum);

arr = [3,2,1];

let x = arr.map(function(e,i,list){

    console.log(e,i,list);
})

console.log(typeof x);

arr = ["3","12","45","23"];

/**
 * Generate another arrayfrom aove which will
 * be the numeric representation of it.
 */

let res = arr.map((e) => Number(e))
console.log(res);

// filter method

res = arr.filter((e,i,list) => {
    return e%2 == 1;
}
);

console.log(res);

// reduce --. it takes two arguments atmost first one is function

arr = [4,5];

let f = (prev,element,index) => {

    console.log(prev,element,index);

    return prev+element+index;
}


res = arr.reduce(f,11); // 11 is initial value
console.log(res);

arr = [5,1,3,2,10];

f = (prev,element) => {

    return  prev + element
}
res = arr.reduce(f,0);
console.log(res);

/**
 * Sort method
 * (a,b) => result
 * 
 * result -ve ==> a will be before b in final result
 * result +ve ==> b will be before a in final result
 * 
 * increasing order:
 * 
 * a>b (possibility 1):
 *  (10,3) => 10-3(a-b);
 * 
 * a < b (possibility 2):
 *  (2,19) => 2-19(a-b);
 * 
 * decreasing order:
 * 
 * a > b (possibility 1):
 *  (10,3) => 10-3(b-a);
 * 
 * a < b (possibility 2):
 *  (2,19) => 2-19(b-a);
 */


arr = [4,2,6,10];

arr.sort((a,b) => {
    return b-a;
})

console.log(arr);