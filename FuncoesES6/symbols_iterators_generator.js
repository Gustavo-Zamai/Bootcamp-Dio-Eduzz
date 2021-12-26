//id únicos
const uniqueId = Symbol(); //<> sempre um Symbol do outro, msm o parametro sendo igual
//Props "privadas" === .getOwnPropertySymbol('parametro');
//INTERFACES
//WELL KNOW SYMBOL
Symbol.iterator;
Symbol.split;
Symbol.toPrimitive;
Symbol.asyncIterator;
Symbol.toStringTag;
//^^^ADD Propiedades ao OBJ^^^//
const obj = {
    [Symbol.iterator](){

    }
}
const arr = [1,2,3,4];
const it = arr [Symbol.iterator]();
console.log(it.next());//valor posicao 0
console.log(it.next());//valor posicao 1
console.log(it.next());//valor posicao 2 
console.log(it.next());//valor posicao 3
console.log(it.next());//valor undefined
//With ECMA6
for(let value of arr){//for of
    console.log(value);
}

const str = 'Gustavo';//for of
for(let value of str){
    console.log(value);
}


const obj = {// OBJETO ITERAVEL
    values: [1,2,3,4],
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
const it = obj[Symbol.iterator]();
console.log(it.next());//posicao 0
console.log(it.next());//
console.log(it.next());
console.log(it.next());
console.log(it.next());
//PODE SE USAR REST NOS ITERATORS

////////////////GENERATORS/////////////////////////
//PAUSA A FUNÇÃO COM ADD DE * E yeild
function * hello(){
    console.log('hello');
    yield 3;//PODE SE PASSAR O VALUE IGUAL AO SYMBOL
    console.log('from');
    yield 2;
    console.log('function');
}
const it = hello();//IGUAL AO USO NO SYMBOL
console.log(it.next());//IGUAL AO SYMBOL
console.log(it.next());//IGUAL AO SYMBOL
console.log(it.next());//IGUAL AO SYMBOL

//GENERATOR usado para construir ITERATORS de forma + facil
function * numbers (){//gera números para dentro dos valores
    let number = 0;
    while(true){
    yield number;
    number++;
    }
}
const it = numbers();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

const obj = {// USANDO GENERATOR PARA CONSTRUIR OBJETOS ITERATORS
    values: [1,2,3,4],
    *[Symbol.iterator](){
        for( var x = 0; x < this.values.length; x++){
            yield this.values[x];
        }
    }
};
for (let value of obj) {
    console.log(value);
}
/////////////////////////////////////




