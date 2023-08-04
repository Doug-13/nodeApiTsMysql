const express = require('express');
const router = express.Router();
import productsController from "../controller/productsController";

//Listar usuários
router.get('/products/',  productsController.listproducts);

//Cadastrar usuario
router.post('/products/',productsController.createproducts);

//Editar usuario
router.put('/product/:id',productsController.editproduct);

//deletar usuario
router.delete('/product/:id',productsController.deleteproduct);
    
export default router;