


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