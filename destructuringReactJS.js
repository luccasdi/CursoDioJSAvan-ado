//
var arr = ['Apple', 'Banana', 'Orange', ['Tomato']];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];

//--
var obj = {
    name: 'Celso',
    props: {
        age: 26,
        favoriteColors: ['black', 'blue']
    }
}

var name = obj.name;
var age = obj.props.age;
var color11 = obj.props.favoriteColors[0];
var color22 = obj.props.favoriteColors[1];
console.log(age);
console.log(color11, color22);

// Destructuring Assignment 
var [apple2, banana2, orange2, [tomato2]] = ['Apple', 'Banana', 'Orange', ['Tomato']];
console.log(tomato, tomato2);

//--
var { name:varName } = obj;
var {props: {age: age2, favoriteColors: [color1, color2]}} = obj;
console.log(age2);
console.log(color1, color2);