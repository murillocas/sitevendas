const dbItem = require("../repositories/dbItems")
const createItem = async (req, res, next) => {
    const newItem = req.body;
    //databaseTeste.addItem(newItem)
    try {
        const result = await dbItem.insertItem(newItem)
        res.json({
            result,
            mensagem: 'Item criado com sucesso!'
          });
    } catch {
        throw new Error('');

    }
    // dbItem.insertItem(newItem)
    // res.sendStatus(200);
}

const deleteItem = async (req, res, next) => {
    const itemId = req.query.id;
    try {
        const result = await dbItem.deletItem(itemId);
        res.json({
            result,
            mensagem: 'Item deletado com sucesso!'
          });
    } catch (erro) {
        throw new Error('');

    }
}

const updateItem = async (req, res, next) => {
    const itemId = req.query.id;
    const updatedItem = req.body;
    //database.updateItem(itemId, updatedItem);
    try {
        const result = await dbItem.updateItem(itemId,updatedItem);
        res.json({
            result,
            mensagem: 'Item atualizado com sucesso!'
          });
    } catch (erro) {
        throw new Error('');

    }
}


module.exports = {
    createItem,
    deleteItem,
    updateItem,
};