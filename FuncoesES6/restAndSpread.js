//without ECMA6
function sum (){
    var value = 0;

    for (var x = 0; x < arguments.length; x++){
        value += arguments[x];
    }
    return value;
}

//with ECMA6 (REST OPERATOR)prototype ARRAY
function sum(...args){
    return args.reduce((acc, value)=> acc + value, 0);
}

//OUTRO EXEMPLO REST OPERATOR aplicando nos demais values da funcao
function sum(a, b,...rest){
    return a + b + rest;
}
console.log(a,b,rest);

//Without ECMA6

const multiply = (...v) => v.reduce((acc, value) => acc + value, 1);

const sum = (...r) => {
    return multiply.apply(undefined, r);
};

//With ECMA6 Spread Operator (retorna value de arrays e lists para parametros)
//Usado em arrays, Strings, literal objects and objetcs iteraveis

//ARRAY
const multiply = (...v) => v.reduce((acc, value) => acc + value, 1);

const sum = (...r) => {
    return multiply(...r);
};
//STRINGS
const str = 'Gustavo';

function logArgs(...args) {
    console.log(args);
}

logArgs(...str); 

//Array Constructor <>concar
const arr = [1,2,3,4];
const arr2 = [5,6,7];

const arr2 = [...arr,5,6,7];//pode ser usado mais de uma vez
console.log(arr2);

//Literals Objects, only create OBJECTS

const obj = {
    test: 123
};

const obj2 = {
    ...obj,//construir somente novos objs e não Array e Strings
    test2: 'hello'
};



