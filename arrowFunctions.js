// Função Simples
function log(value) {
    console.log(value);
}

// Chamando pelo Construtor
function Car() {
    this.foo = 'bar'
}

console.log(new Car());

// Função Anonima
var log = function(value){
    console.log(value);
};
log('test');

var sumOld = function(a, b){
    return a+b;
};
log(sumOld(5,5));

// Arrow Functions
var sum = (a,b) => a + b;
log(sum(5,15));

var sum1 = (a,b) => {
    var x = 10;

    if(a>b)
    return a + b;
    else
    return a-b;
}
log(sum1(5,15));

// Objeto Literal
var createObj = () => ({teste: 123});
console.log(createObj());

//Time 
var obj = {
    showContext: function showContext(){
        setTimeout(()=>{
            this.log('after 1000ms');
        }, 1000);
    },
    log: function log(value) {
        console.log(value);
    }
};

obj.showContext();