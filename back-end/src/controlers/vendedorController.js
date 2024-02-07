const dbItem = require("../repositories/dbItems")
const createItem = async(req, res, next) => {
    const newItem = req.body;
    //databaseTeste.addItem(newItem)
    try{
        await dbItem.insertItem(newItem)

    }catch{
        throw new Error('');

    }
    dbItem.insertItem(newItem)
   // res.sendStatus(200);
}

const deleteItem = (req, res, next) => {
    res.send("item deletado")
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