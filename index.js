const express = require('express');
const router = require("./routers/index");
const app = express();
const porta = 3000;

router(app);

app.listen(porta, (error) => {
    if (error) {
        console.log("Erro ao executar a aplicação");
        return;
    }
    console.log(`Aplicação rodando na porta ${porta}`);
});