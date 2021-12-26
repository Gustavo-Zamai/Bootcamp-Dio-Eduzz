//Callbacks and Promises
//PROMISES
Promise = new Promise (resolved, reject)
//Pending == Processando
//Fullfilled == Processado com sucesso
//Rejected == Processado com algum erro
const doSomethingPromise = new Promise ((resolve, reject)=>{
    throw new Error('Something went wrong');
    setTimeout(function() {
        resolve('First data');
    }, 1000);
});
///////////////////////////////////////////////////////////////////
doSomethingPromise .then(data => doOtherThingPromise) 
.catch('Ops',error);//trata mais de uma promise por vez

Promise.all([doSomethingPromise()], [doOtherThingPromise]).then(data=>{//
    console.log(data);//processa as PROMISES em paralelo
})

//////////////////////////////////////////////////////////////////////////////////
Promise.race([doSomethingPromise()], [doOtherThingPromise]).then(data=>{//
    console.log(data);//retorna a PROMISE que terminar o processo primeiro
})
//////////////////////////////////////////////////////////////////////////////
/////FETCH,ASYNC/AWAIT , EVENT EMITTER
//Requisições fetch = utiliza promises para isso
fetch('/data.json').then(responseStream=> {
    responseStream.json().then(data=>{
        console.log(data);
    });
})
//fetch apenas erro de rede, captura no TRYCATCH
//////////////////////////////////////////////////////////////////////////
//ES7 === ASYNC/AWAIT
//Async resolve promise de maneira mais rapida
const func = async () =>{
    return 1234;
}
func().then(data=>{
    console.log(data);
})
//Await aguarda a resolução de outras promises
//Processamento assincrono sequencial
////////////////////////////////////////////////////////////////////
//////////////////EventEmitter//////////////////////////////////
//EventEmitter exclusivo do Node, necessita importar o 'events'
//EventTarget similar para usar no browser
const EventEmitter = require('events');

const emitter = new EventEmitter();
emitter.on('User logged', data =>{
    console.log(data);
});

emitter.emit('User logged', {user: 'Gustavo'});




