const express = require('express');
const router = express.Router();
import cartController from "../controller/cartController";

//Listar usuários
router.get('/carts/',  cartController.listcarts);

//Cadastrar usuario
router.post('/carts/',cartController.createcarts);

//Editar usuario
router.put('/cart/:id',cartController.editCart);

//deletar usuario
router.delete('/cart/:id',cartController.deleteCart);
    
export default router;