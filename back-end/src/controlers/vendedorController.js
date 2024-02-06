const databaseTeste = require("../repositories/jsonTest")
const dbItem = require("../repositories/dbItems")
const createItem = (req, res, next) => {
    const newItem = req.body;
    //databaseTeste.addItem(newItem)
    dbItem.insertItem(newItem)
   // res.sendStatus(200);
    throw new Error('');
}

const deleteItem = (req, res, next) => {
    res.send("item criado")
    throw new Error('');
}

const updateItem = (req, res, next) => {
    const itemId = req.params.id;
    const updatedItem = req.body;
    //database.updateItem(itemId, updatedItem);
    res.json({ mensagem: 'Item atualizado com sucesso!' });
    throw new Error('');
}


module.exports = {
    createItem,
    deleteItem,
    updateItem,
};