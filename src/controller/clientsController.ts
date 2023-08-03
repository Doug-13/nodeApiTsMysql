import { Request, Response } from "express";
import db from '../config/database';

async function listClients(req: Request, res: Response) {
    db.connection.query('SELECT * FROM clients_ecommerce', (err, results) => {
        // console.log(results)
        res.json({
            success: true,
            message: 'Listagem realizada com sucesso.',
            data: results
        });
    })
}

async function createClients(req: Request, res: Response) {
    const querysql = 'INSERT into clients_ecommerce (ds_name,nm_cpf,fl_status) VALUES(?,?,?);'
    const params = Array(
        req.body.DS_NAME,
        req.body.NM_CPF,
        req.body.FL_STATUS
    )
    db.connection.query(querysql, params, (err, results) => {
        res.send('Cadastro Realizado com Sucesso' + results);
    })
}

async function editClient(req: Request, res: Response) {
    const idUser = req.params.id;
    const querysql = 'UPDATE clients_ecommerce SET DS_NAME = ?, NM_CPF = ?, FL_STATUS=? WHERE ID_CLIENT =?';
    const params = Array(
        req.body.DS_NAME,
        req.body.NM_CPF,
        req.body.FL_STATUS,
        req.body.id
    );
    db.connection.query(querysql, params, (err, results) => {
        res.json({
            sucess: true,
            message: 'Alteração realizada com sucesso.',
            data: results
        });
    })
};

async function deleteClient(req: Request, res: Response) {
    const idUser = req.params.id;
    const querysql = 'delete from clients WHERE ID_CLIENT =?'

    db.connection.query(querysql, [idUser], (err, results) => {
        res.json({
            message: 'Cadastro apagado com Sucesso',
        });
    })
}


export default {
    listClients,
    createClients,
    editClient,
    deleteClient
}