/**
 * 1.manipulating of an existing node
 * 2. removing a node from DOM tree (UI)
 * 3. Adding new nodes/elements to DOM tree.
 */

 

function action(){

//     // let bold = document.querySelector('#container> .child > b')
//     // // input.type="text";
//     // bold.remove();

//     // if i query once more for that can we get

//     // bold = document.querySelector('#container>.child>span');
//     // console.log(bold);

//     // if i remove any parent of subtree then entire subtree gets removed.


//     // add new element to dom

//     /**
//      * for adding new element
//      * 1. create the element
//      * 2. then we add that newly created element into the tree
//      *      where we want.
//      * 3. adding nodes into the tree.
//      * 
//      */

//     let para = document.createElement('p'); // creates a fresh para element.
//     para.innerText = 'India won';
//     // console.log(para);
//     let parent = document.querySelector('.child');
//     let bold = document.querySelector('.child > b');
//     // parent.appendChild(para);
//     // to add multiple elements use append seperating with comos.
//     // parent.append(1,3,4,);
//     //createElement() => creates a new HTML element object in the HEAP memory 

//     // to add element before 

    
//     parent.insertBefore(para,bold);
//     // parent.appendChild(para);

//     // getelementbytagname

let child = document.querySelector('.child');

let targetElem = child.children[2]; // insert before 3rd element

const newElem = document.createElement('b');
newElem.innerText = 'Deepak Sangeetham'

child.insertBefore(newElem,targetElem);


} 

