const express = require("express")

// //Instancia o express na variável app
const app = express();

//para o express utilizar o json
app.use(express.json());

export default app;