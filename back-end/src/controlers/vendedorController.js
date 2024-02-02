const databaseTeste = require("../repositories/jsonTest")
const createItem = (req, res, next) => {
    const newItem = req.body;
    databaseTeste.addItem(newItem)
    res.json({ mensagem: 'Item adicionado com sucesso!' });
    throw new Error('');
}

const deleteItem = (req, res, next) => {
    res.send("item criado")
    throw new Error('');
}

const updateItem = (req, res, next) => {
    const itemId = req.params.id;
    const updatedItem = req.body;
    database.updateItem(itemId, updatedItem);
    res.json({ mensagem: 'Item atualizado com sucesso!' });
    throw new Error('');
}


module.exports = {
    createItem,
    deleteItem,
    updateItem,
};