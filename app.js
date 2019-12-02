


function a() {
    function b() {
        console.log(myVar);
    }
    
    let myVar = 2;
    b();
}

let myVar = 1;
a();

let c = 35;
let d = 23;

if (c > d) {
    let c = true;
    console.log('c = true: ', c);
}

console.log(c);
// Don't use hoisting/rely on it to access variables and functions
// console.log(a);

// var a = 'Hello World!';
// console.log(a);

// if (a === undefined) {
//     console.log('a is undefined');
// } else {
//     console.log('a is defined');
// }

// Long running function
function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms) {
        console.log('finished function');
    }
}

function clickHandler() {
    console.log('click event!');
}

// Listen for the click event
document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log('finished execution at the end');