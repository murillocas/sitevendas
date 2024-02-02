const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const express = require('express'); 

// Carregar variáveis de ambiente
dotenv.config()
const SECRET_KEY = process.env.SECRET_KEY;

if(!SECRET_KEY){
    console.error("A SECRET_KEY não está definida no arquivo .env");
    throw new Error(500);
}

const users = [
    { username: 'usuario', password: 'senha', role: 'user' },
];


// valida usuario e cria o tokem
const authenticateUser = (req, res, next) => {
    const { username, password } = req.body;
  
    const user = users.find(user => user.username === username && user.password === password);
  
    if (user) {
      const token = jwt.sign({ username: user.username, role: user.role }, SECRET_KEY, { expiresIn: '1h' });
      res.json({ token });
    } else {
        throw new Error('Credenciais inválida');
    }
  };


  // valida valida tokem e permite seguir na rota
const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];
  
    if (token == null) {
        throw new Error('access denied');
       // return res.sendStatus(401); // Token não fornecido
    }

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            throw new Error('Invalid credentials');

            //return res.sendStatus(403); // Token inválido ou expirado
        }
        req.user = user; // Adiciona o usuário autenticado ao objeto de requisição para uso posterior
        next(); // Continua para a próxima middleware ou rota
    });
  };


  module.exports = {
    authenticateUser,
    authenticateToken,
  };