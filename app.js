
function b() {
    var myVar;
    console.log('myVar inside b: ', myVar);
}

function a() {
    var myVar = 2;
    console.log('myVar inside a: ', myVar);
    b();
}

var myVar = 1;
console.log('myVar initial value: ', myVar);
a();


// Don't use hoisting/rely on it to access variables and functions
// console.log(a);

// var a = 'Hello World!';
// console.log(a);

// if (a === undefined) {
//     console.log('a is undefined');
// } else {
//     console.log('a is defined');
// }