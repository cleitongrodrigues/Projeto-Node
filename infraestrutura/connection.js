const mysql = require('mysql2');

const conexao = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "controle_atendimento"
});
conexao.connect((error) => {
    if (error) {
        console.error("Erro ao conectar ao banco de dados:", error.message);
        return;
    }
    console.log("Conexão estabelecida com o banco de dados!");
});

module.exports = conexao;