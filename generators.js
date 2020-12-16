// Generators

function* hello() {
    console.log('Hello');
    yield;
    console.log('From');
    const value = yield 2;
    console.log(value);
    //console.log('Function');
}

//hello();
const it = hello();
console.log(it.next());
console.log(it.next());
console.log(it.next('OutSide!'));

function* naturalNumbers(){
    let number = 0;
    while(true){
        yield number;
        number++;
    }
}

const it = naturalNumbers();
console.log(it.next());

