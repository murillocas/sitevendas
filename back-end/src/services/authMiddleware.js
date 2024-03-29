const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const express = require('express'); 

const dbUser = require("../repositories/dbUsuario")
//const dbItem = require("../repositories/dbItems")
// Carregar variáveis de ambiente
dotenv.config()
const SECRET_KEY = process.env.SECRET_KEY;

if(!SECRET_KEY){
    console.error("A SECRET_KEY não está definida no arquivo .env");
    throw new Error(500);
}


const authenticateUser = async (req, res, next) => {
  const { email, senha } = req.body;
  console.log(req.body);

  try{
    const usuario = await dbUser.findUserLogin(email);

    if (usuario[0].senha == senha) {
      const token = jwt.sign({ username: usuario[0].name, role: usuario[0].role }, SECRET_KEY, { expiresIn: '1h' });
      res.json({ token });
    } else {
        throw new Error('Credenciais inválida');
    }
  }catch{
    res.json("não ok");

  }
};
/*
// valida usuario e cria o tokem
const authenticateUser = async (req, res, next) => {
    const { username, password } = req.body;
    //console.log("o usuario deve estar aki" )
  try{
    const usuario = await dbUser.findUserLogin(username)
  }catch{
    throw new Error('');
  }
    const user = databaseUsuario.findUser(username);//users.find(user => user.username === username && user.password === password);
    if (user.password == password) {
      const token = jwt.sign({ username: user.username, role: user.role }, SECRET_KEY, { expiresIn: '1h' });
      res.json({ token });
    } else {
        throw new Error('Credenciais inválida');
    }
  };
*/

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

  const authenticateRole = (requiredRole) => (req, res, next) => {
    const token = req.headers['authorization'];

    if (token == null) {
        throw new Error('access denied');
    }

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            throw new Error('Invalid credentials');
        }

        // Verifica se o usuário possui a role necessária
        if (!user.role || user.role !== requiredRole) {
          console.log("\n erro qui \n")
            throw new Error('');
        }

        req.user = user; // Adiciona o usuário autenticado ao objeto de requisição para uso posterior
        next(); // Continua para a próxima middleware ou rota
    });
};


  module.exports = {
    authenticateUser,
    authenticateToken,
    authenticateRole,
  };