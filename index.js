const express = require('express');
const app = express();
const porta = 3000

app.listen(porta, (error) => {
    if (error) {
        console.log("Erro ao executar a aplicação");
        return;
    }
    console.log(`Aplicação rodando na porta ${porta}`);
});