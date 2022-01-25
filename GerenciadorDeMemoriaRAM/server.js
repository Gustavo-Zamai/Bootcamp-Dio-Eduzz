const http = require('http');
const host = "http://localhost";
const port = 3000;
const stats = require('./pcRamUsage');

http.createServer((request, response) => {
    let url = request.url;
    if (url === '/stats'){
        response.end(JSON.stringify(stats, null, 2));
    }else{
        response.end(<h1>Welcome to pcRam!</h1>);
    }
}).listen(port, () => {
    console.log(`Server is running in ${host}:${port} , ${stats}`);
});