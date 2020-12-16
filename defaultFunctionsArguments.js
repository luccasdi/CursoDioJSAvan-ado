//lazy evaluation
function randomNumber(){
    return Math.random() * 10;
}

console.log(randomNumber());

//Função Simples
function mult(a,b = randomNumber()){
    return a * b;
}
console.log(mult(5));

