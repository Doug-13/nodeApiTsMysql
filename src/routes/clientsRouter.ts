const express = require('express');
const router = express.Router();
import clientsController from "../controller/clientsController";

//Listar usuários
router.get('/clients',  clientsController.listClients);

//Cadastrar usuario
router.post('/clients/',clientsController.createClients);

//Editar usuario
router.put('/client/:id',clientsController.editClient);

router.delete('/client/:id',clientsController.deleteClient);
    
export default router;
