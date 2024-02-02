// Importar o objeto app do arquivo app.js
const app = require('./app');
const listEndpoints = require('express-list-endpoints');
// Porta do servidor
const PORT = process.env.PORT || 3000;

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(listEndpoints(app));

});