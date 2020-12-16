// Rest Operator
function sum (...args){    
    return args.reduce((acc, value) => acc + value, 0);
}
console.log(sum(5,6,7));

const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);
const sum1 = (...rest) => {
    return multiply(...rest);
};
console.log(sum1(18,7,6));

// Spread Operator
// Strings, Arrays, Literal Objects, Objetos Iteraveis
// String
const str = 'Digital Innovation One';
const arr = [1, 2, 3, 4];

function logArgs(...args){
    console.log(args);
}
logArgs(...arr);

function logList(a, b, c) {
    console.log(a, b, c);
}

// Arrays
logList(...arr);

const arr2 = [...arr, 5, 6, 7];
console.log(arr2);

const arr3 = [...arr2, ...arr, 0,0,0];
console.log(arr3);

// Literal Objects
const obj = {
    teste: 123
}

const obj2 = {
    ...obj,
    test2: 'hello'
}

console.log(obj2);

