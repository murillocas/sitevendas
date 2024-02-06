const db = require("../services/dbconnection");


function getItems() {
      db.query('SELECT * FROM ' + "items", (err, results) => {
        if (err) {
          console.log(err)
          throw new Error('');
        }
        console.log(results)
       // resolve(results);
      });
  }
function insertItem(newItem) {
 
  db.query('INSERT INTO items SET ?', newItem, (err, results) => {
    if (err) {
      throw new Error('');
    }
  
  });
}
  
  // Exportar a função para uso em outros arquivos
  module.exports = {
    getItems,
    insertItem,
  };