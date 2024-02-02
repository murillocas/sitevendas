const express = require('express'); 
const router = express.Router("");

const vendedorController = require("../controlers/vendedorController")

router.post("/createItem", vendedorController.createItem)

router.delete("/deleteItem", vendedorController.deleteItem )

router.put("/updateItem",vendedorController.updateItem)


module.exports = router;