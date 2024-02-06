const databaseTeste = require("../repositories/jsonTest")
const createItem = (req, res, next) => {
    const newItem = req.body;
    databaseTeste.addItem(newItem)
    res.json({ mensagem: 'Item adicionado com sucesso!' });
    throw new Error('');
}

module.exports = {
    createItem,
};