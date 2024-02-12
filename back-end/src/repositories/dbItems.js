const db = require("../services/dbconnection");

async function getItems() {
  try {
    const query = 'SELECT * FROM items';
    const connect = await db.abrirConexao();
    const [results, fields] = await connect.query(query);
    connect.release();
    return results;
  } catch (error) {
    console.error("Erro ao obter itens:", error);
    throw error;
  }
}
async function findItemId(ID) {

  try {
    const query = 'SELECT * FROM items WHERE id = ?';
    const connect = await db.abrirConexao();
    const [results, fields] = await connect.query(query, [ID]);

    connect.release();
    return results;

  } catch (error) {
    console.error("Erro ao procurar itens:", error);
    throw error;
  }

}
async function insertItem(newItem) {

  try{
    const query = 'INSERT INTO items SET ?';
    const connect = await db.abrirConexao();
    const [results, fields] = await connect.query(query, [newItem]);

    connect.release();
    return results;

  }catch(error) {
    console.error("Erro ao inserir itens:", error);
    throw error;
  }

}
async function deletItem(ID) {

  try{
    const query = 'DELETE FROM items WHERE id = ?';
    const connect = await db.abrirConexao();
    const [results, fields] = await connect.query(query, [ID]);

    connect.release();
    return results;

  }catch(error) {
    console.error("Erro ao deletar itens:", error);
    throw error;
  }

}
async function updateItem(ID, updateItem) {

  try{
    const query = 'UPDATE items SET ? WHERE id = ?';
    const connect = await db.abrirConexao();
    const [results, fields] = await connect.query(query, [updateItem, ID]);

    connect.release();
    return results;

  }catch(error) {
    console.error("Erro ao atualizar itens:", error);
    throw error;
  }

}



// Exportar a função para uso em outros arquivos
module.exports = {
  getItems,
  insertItem,
  findItemId,
  deletItem,
  updateItem,
};