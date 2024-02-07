const dbItem = require("../repositories/dbItems")


const findItem = async (req, res, next) => {
    //console.log(req.params.id);
    //res.json( databaseTeste.findItem(req.query.id));
  
    try{
        res.json( await dbItem.findItemId(req.query.id));
    }catch (err){
        throw new Error('');
    }
}

const allItem = async (req, res, next) => {
    try{
        res.json( await dbItem.getItems());
    }catch (err){
        throw new Error('');
    }
    

}


module.exports = {
    findItem,
    allItem,
};