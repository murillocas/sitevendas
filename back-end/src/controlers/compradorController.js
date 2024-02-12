const dbItem = require("../repositories/dbItems")
//const dbUsuario = require("../repositories/dbUsuario")

const findItem = async (req, res, next) => {
    //console.log(req.params.id);
    //res.json( databaseTeste.findItem(req.query.id));
  
    try{
        const id = req.query.id;
        console.log(id)
        res.json( await dbItem.findItemId(id));
    }catch (err){
        throw new Error('');
    }
}

const allItem = async (req, res, next) => {
    try{
        console.log("allItems")
        res.json( await dbItem.getItems());
    }catch (err){
        throw new Error('');
    }
}

module.exports = {
    findItem,
    allItem,
};