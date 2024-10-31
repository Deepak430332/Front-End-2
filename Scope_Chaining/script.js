let words = ['the deepak', 'a uma an'];


function f (input){

    input = input.toLowerCase();
    let arr = input.split(' ');
    let str = "";

    for(let word of arr){

        if(word === 'the' || word === 'an' || word === 'a'){

            continue;
        }

        else{
            str += word;
        }
    }

    return str.trim();
}


for(let word of words){

    let articleLess = f(word);
    console.log(articleLess);
   
}


// this keyword . 
/**
 * every instruction can be divided into two sections.
 * 1. global
 * 2. local
 * 
 * in java, this keyword is used in a non-static method of a class. but in js we can use anywhere
 * 
 * this keyword in global points is global object. in browser global object it is window object.
 *
 * variabkes which are cleacred withvarfunction keyword s in tghe global will be a part of thw obkect
 * 
 * in arrow function this is treated as variable
 */

// window.prompt('hi')
// window.console.log("jai")
// window.alert("Hi ")



console.log(this);

function callme(){

    console.log(this);
}

window.callme();

let user = {

    name:'deeps',
    age:21,
    address:{
        city:'npet',
        print:function(){

            console.log(this);
        }
    }
   
    
}

user.address.print();