/**
 * 1.Arrays
 * 2. Object literals
 * 3. Primitive and non-primitive data types
 */

let arr =[20,22,false,'deepak']; // in js, arrays are non-homogeneous.
console.log(arr[3])
arr[3] = 'seshu'
console.log(arr[3])
arr.push(5); // it adds elements and returns the length of the array
// console.log(arr)
// arr=[1,2,3]
// console.log(arr)
// let res = [arr.push(5)]
// console.log(res);

// let end = arr.pop(); // removes the element from the array and returns it.
// console.log(arr)
// console.log(end);
// console.log(arr.unshift(0)); // it returns the updated length
// console.log(arr);
// console.log(arr.shift()); // it removes the first element and returns it

// arr[10] = 99;
console.log(arr);

arr= [4,1,3,5,7];
// let removedElems = arr.splice(2,2); // from index 2 delete 2 elements including index 2 and it will add any elements at index 2 if we pass
// console.log(removedElems,arr);
// insertElems = arr.splice(2,0,10,12); // it returns empty array
// console.log(insertElems,arr);
// arr = [4,1,3,5,7];
// arr.splice(1,2,3,1);
console.log(arr)
let joinedStr = arr.join(' ');
console.log(joinedStr,typeof joinedStr);
console.log(arr.slice(1,4)); // index 1 is included but index 4 is excluded

/**
 * Objects -->key-valued pair structure
 */


let x = {};
// console.log(x)

let user = {

    name:"Deepak",
    id:430332,
    'a-b':10
};
console.log(user['id']); // always passed the key as string if indexing
console.log(user.name);

// delete user.id;
console.log(user);
let n = Object.entries(user);
console.log(n.length);
console.log(user['a-b']);
// console.log(user."a-b"); this statement wont work
// datatype of an array and object is object.
console.log(typeof arr,typeof user)

/**
 * Primitive and non-primitive datatypes
 * 
 */

// let a =[1,2],b = [1,2];
// console.log(a == b);

// let c = {name:"Deepak"},d = {name:"Deepak"};
// console.log(c == d)

let a = 20; // primititve datatype --> stack memeory
let b = {name : "Deepak"}; // non-primitive --> heap

/** Primitive datatypes are fixed and standard amount of size, but non-primitves are dynamic in natures
 * and their size gets changed.
 * strings are immutable in nature.
 * Non-primitive datatpes are growable in size so they are stored in heap rather than stack.
 */

a =[1,2,3];
b = a.slice(); // b is holding the copy of reference but not copy of data
a[1] = 4;
console.log(a == b, a===b);
console.log(a,b);

a = [1,2,3];
b = [...a]; // spread operator removes the element
a[1] = 4;
console.log(a,b);

function callme(a,b,c){

    console.log(a,b,c);
}

x = [1,2,3];
callme(...x);

// arrow functions

let func = (a,b) => {

    console.log(a+b);
}

func(10,20); // it has both syntactc and technical advantages

let func1 = () => 20;
console.log(func1());

let num = 10;
let f1 = () => num++;

let n1 = f1();
console.log(num,n1);
