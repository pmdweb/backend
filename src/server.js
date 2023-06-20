const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const conn = require('./database');

const app = express();

app.use(express.json());

// middleware para logar as requisições recebidas
app.use((req, res, next) => {
    console.log('Received request: ', req.method, req.url);
    next();
});

// Configurando o cors para permitir requisições de qualquer origem
const corsOptions = {
    origin: '*',
    methods: 'GET,POST,PUT,DELETE,PATCH',
    allowedHeaders: 'Content-Type,Authorization'
};
app.use(cors(corsOptions));

app.use(routes);

app.listen(666); // porta usada para o backend