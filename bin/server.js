'use strict' //Força o JS a ser criterioso

const app = require('../src/app.js');
const http = require('http');//Vai buscar na pasta node_modules
const debug = require('debug');//Vai buscar na pasta node_modules
//Exemplo - importar arquivo local
//const xpto = requeire('./xpto'); Vai buscar na pasta da aplicação

const port = normalizePort(process.env.port || '3000');
app.set('port', port);

const server = http.createServer(app);//Criando servidor -  modelo mvc

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
console.log('Api rodando na porta ' + port);

function normalizePort(val){
    const port = parseInt(val, 10);
    if(isNaN(port)){
        return val;
    }
    if(port >= 0){
        return port;
    }
    return false;
};
function onError(error){
    if(error.syscall !== 'listen'){
        throw error;
    }
    const bind =
    typeof port == 'string' ? 'Pipe' + port: 'Port' + port;
    
    switch (error.code){
        case 'EACCES' : //Erro de permissão
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINNUSE' : 
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default :
            throw error;
    }
}
function onListening(){
    const addr = server.address();
    const bind = typeof addr === 'string' 
        ? 'pipe' + addr
        : 'port' + addr.port;
        debug('Listening on ' + bind);
}