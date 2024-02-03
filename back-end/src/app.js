const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const expressAsyncErrors = require('express-async-errors');
const errorHandling = require('../src/errorHandling/error')


const authtoken = require("../src/services/authMiddleware")

const vendedorRouter = require("./routers/vendedor")
const compradorRouter = require("./routers/comprador")



// Carregar variáveis de ambiente
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan('combined'));

// Configurar rotas 

app.use('/login',authtoken.authenticateUser);

app.use('/vendedor/',authtoken.authenticateToken,vendedorRouter);
app.use('/adm/',authtoken.authenticateRole("adm"),vendedorRouter);

app.use('/comprador/',compradorRouter);





app.use((req, res, next) => {
  throw new Error('Rota não encontrada');
});


// verificar erros 

app.use(errorHandling.errorHandler);
// Exportar o objeto app para ser utilizado em server.js

module.exports = app;