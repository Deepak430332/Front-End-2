// // javascript allows dynamic addition of elements

// function func(){

//     alert('something');
// }


// const f1 = () =>{

//     console.log("hello world");
// }
// const f2 =() =>{

//     console.log("i am deepak");
// }
const button = document.getElementById('test');

// // addEvenetListner(eventName,function)

// button.addEventListener("click",f1)
// button.addEventListener("click",f2)

// // button.addEventListener('click',x);


// // the callback function f will be called whenever event occurs

// function x(){

//     // this function should rmeove the f1 listener for button

//     //removeEventListener(eventname,function)
//     button.removeEventListener('click',f1);
//     console.log('hello world is not printed');
// }

const box = document.querySelector('.test');
box.addEventListener('mouseenter',() =>
{
    // box.className='test active';

    box.classList.add('active')
    console.log('mouse entered');
})

box.addEventListener('mouseleave',() => {

    box.classList.remove('active');
    console.log('mouse left the element');
})