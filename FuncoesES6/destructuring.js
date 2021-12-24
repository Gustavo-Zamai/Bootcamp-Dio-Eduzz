//withou use Destructuring
let array = ['grape','banana','olive','apple',['tomato']];
var grape = array[0];
var banana = array[1];
var olive = array[2];
var apple = array[3];
var tomato = array[4][0];

//OBJECTS without destructuring
var obj = {
    name: 'Gus'
}
var name = obj.name;



// With Destructuring and ECMA6
var [grape,banana,olive,apple,[tomato]] = 
['grape','banana','olive','apple',['tomato']];

//Destructuring in OBJECTS
var obj = {
    name: 'Gus',
    props: {
        age: 26
    }
}
var { name } = obj;
var {name: name2} = obj;//atribuindo novo nome a variavel name
var{        //buscando objetos dentro de objetos, NESTED OBJECTS
    props: {age}
} = obj;








