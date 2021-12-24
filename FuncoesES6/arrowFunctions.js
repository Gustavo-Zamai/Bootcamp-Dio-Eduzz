//Arrow Function =>
//Anonimas

let sum = (a, b) => {
    return a + b;
}
console.log(sum(3 , 2));

//Classic Functions
function color () {
    return this.color;
} 

//default function args

//lazy valuation
function randomNumber () {
    console.log('Generatin a random number...');
    return Math.random() * 7;
}


function multiply (a, b = randomNumber()) {
    return a * b;
}

console.log(multiply(8));
console.log(multiply(8));