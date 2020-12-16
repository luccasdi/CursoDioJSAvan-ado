//Simples
var obj1 = {
    prop1: 'DIO-prop1'
}
console.log(obj1);

//Novo ES6
var prop2 = "DIO-prop2"
var obj2 = {
    prop2
}
console.log(obj2);

//Funções ES6

function method1(){
    console.log('method called');
}

var obj3 = {
    method1
};

obj3.method1();

// Normal
var obj4 = {
    sum: function sum(a, b) {
        return a + b;        
    }
};

console.log(obj4.sum(1, 5));

//Anonima
var obj5 = {
    sum: function(a, b) {
        return a + b;        
    }
};

console.log(obj5.sum(1, 4));

//Simplificada
var obj6 = {
    sum(a,b){
        return a+b;
    }
};

console.log(obj6.sum(6, 5));

//
var propName = 'test';

var obj7 = {
    [propName + 'concat']: 'prop value'
};

console.log(obj7);
