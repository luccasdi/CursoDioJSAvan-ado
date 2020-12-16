// Symbols
const uniqueId = Symbol('Hello');

// const obj = {
//     [uniqueId]: 'Hello'
// };

// console.log(obj);

// Well known Symbols

Symbol.iterator
Symbol.split
Symbol.toStringTag

// const obj ={
//     [Symbol.iterator]()
// }

const arr = [1, 2, 3, 4]
const str = 'Digital Innovation One';

const it = arr[Symbol.iterator]();

while(true) {
    let { value, done } = it.next()
    //console.log(value);
    if(done) break;
    console.log(value);
}
//console.log(it.next());

for (let value of arr){
    console.log(value);
}

console.log(arr[Symbol.iterator] ().next());

const obj = {
    values: [1, 2, 3, 4],
    [Symbol.iterator](){
        let i = 0;

        return{
            next: () => {
                i++;

                return{
                    value: this.values[i - 1],
                    done: i > this.values.length 
                };
            }
        };    
    }
};

const arr2 = [...obj];
console.log(arr2);

// const it1 = obj[Symbol.iterator]();

// console.log(it1.next());
// console.log(it1.next());
// console.log(it1.next());
// console.log(it1.next());
// console.log(it1.next());

