const db = require("../services/dbconnection");


function getItems() {
  return new Promise((resolve, reject) => {
    const query ='SELECT * FROM items'
    db.query(query, (err, results) => {
      if (err) {
        console.log(err)
        throw new Error('');
      } else {
        //console.log(results);
        resolve(results);
      }
      //return results

    });
  })
}

function findItemId(ID) {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM items WHERE id = ?';

    db.query(query, [ID], (err, results) => {
      if (err) {
        console.log(err)
        throw new Error('');
      } else {
        //console.log(results);
        resolve(results);
      }
      console.log(results)
      //return results

    });
  })
}
function insertItem(newItem) {
  return new Promise((resolve, reject) => {

  const query = 'INSERT INTO items SET ?'
  db.query(query, newItem, (err, results) => {
    if (err) {
     // reject(err);
    }else {
      //console.log(results);
      resolve(results);
    }

  });
})

}

// Exportar a função para uso em outros arquivos
module.exports = {
  getItems,
  insertItem,
  findItemId,
};