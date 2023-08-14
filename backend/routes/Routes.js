
const productoController = require('../controllers/productoController');

const express = require('express');

const api= express.Router();

module.exports=api;

//rutas Inventario
api.post('/producto',productoController.createProducto);
api.get('/productos',productoController.getProductos);
api.put("/producto/update/:id",productoController.updateProducto);
api.delete('/producto/delete/:id',productoController.deleteProducto);
api.get("/producto/show/:id",productoController.getProducto);