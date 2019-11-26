
var a = 'Hello World!';

function b() {
    console.log('Called b!');
}

// Don't use hoisting/rely on it to access variables and functions
b();
console.log(a);