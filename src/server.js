const express = require('express');
const route = require('./route');
const path = require('path');

const server = express();

server.set('view engine', 'ejs');

server.use(express.static('public'))

// __dirname chama a pasta na qual o arquivo está, então ela chama a parta src e indica que o views está lá
server.set('views', path.join(__dirname, 'views'));

//Middleware é o intermédio de tudo o que entra, passa por aqui para ir para o Controller
server.use(express.urlencoded({extended: true}));

server.use(route);

server.listen(3000, () => console.log("Rodando!"))

