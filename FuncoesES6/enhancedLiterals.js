//classic 
let obj = {
    prop: 'Gustavo'
};

//defining var
let prop = 'Gustavo';
let obj = {
    prop: prop
};
console.log(obj);

//ECMA6
let prop = 'Gustavo';
let obj = {
    prop
};
/////////////////////////////////
var obj = {
    sum(a,b){
        return a+b;
    }
};
console.log(obj);