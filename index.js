const express = require('express');
const router = require("./routers/index");
const app = express();
const porta = 3000;
const conexao = require("./infraestrutura/connection");
const tabelas = require("./infraestrutura/tabelas");

app.use(express.json());
app.use(express.urlencoded({ extended : true }));

tabelas.init(conexao);

router(app, express);

app.listen(porta, (error) => {
    if (error) {
        console.log("Erro ao executar a aplicação");
        return;
    }
    console.log(`Aplicação rodando na porta ${porta}`);
});