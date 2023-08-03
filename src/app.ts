const express = require("express")

// //Instancia o express na variável app
const app = express();

//para o express utilizar o json
app.use(express.json());

import clientsRouter from './routes/clientsRouter';

app.use('/api/', clientsRouter);

export default app;