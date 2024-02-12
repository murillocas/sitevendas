const db = require("../services/dbconnection");


async function findUserLogin(email) {
  try {
    const query = 'SELECT * FROM usuario WHERE email = ?';

    const connect =  await db.abrirConexao();
    const [results, fields] = await connect.query(query,[email]);
    connect.release();

    return results; // Retorna os resultados diretamente

  } catch (error) {
    console.error("Erro ao obter itens:", error);
    throw error; // Lança o erro para ser tratado pela chamada da Promise
  }
}

/*async function findUserLogin(email) {
    return new Promise((resolve, reject) => {
        const query = 'SELECT role, password FROM usuario WHERE email = ?';
        db.query(query, email, (err, results) => {
        if (err) {
          console.log(err)
          throw new Error('');
        } else {
          resolve(results);
        }
        //return results
  
      });
    });
  }
  

  function createUser(newUser) {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO usuario SET ?'

        db.query(query, newUser, (err, results) => {
        if (err) {
          console.log(err)
          throw new Error('');
        } else {
          resolve(results);
        }
        //return results
  
      });
    });
  }
*/
module.exports = {
    findUserLogin,
};