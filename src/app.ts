const express = require("express")
// //Instancia o express na variável app
const app = express();

//para o express utilizar o json
app.use(express.json());

import clientsRouter from './routes/clientsRouter';
import productsRouter from './routes/productsRouter';
import cartRouter from './routes/cartRouter';

app.use('/api/', clientsRouter);
app.use('/api/', productsRouter);
app.use('/api/', cartRouter);

export default app;