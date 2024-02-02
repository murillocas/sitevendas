const express = require('express'); 
const router = express.Router();

const compradorController = require("../controlers/compradorController")


router.get("/allitems",compradorController.allItem)

router.get("/finditem",compradorController.findItem)


module.exports = router;