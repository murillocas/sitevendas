const databaseTeste = require("../repositories/jsonTest")
const authMiddleware = require("../services/authMiddleware")


const findItem = (req, res, next) => {
    console.log(req.params.id);
    res.json( databaseTeste.findItem(req.query.id));
  
    throw new Error('');
}

const allItem = (req, res, next) => {

    res.json( databaseTeste.allItems());

    throw new Error('');
}


module.exports = {
    findItem,
    allItem,
};