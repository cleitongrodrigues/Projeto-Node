const mysql = require('mysql2');

const bd_servidor = 'localhost';
const bd_porta = 3306;
const bd_usuario = 'root';
const bd_senha = 'root';
const bd_banco = 'controle_atendimento';

const conexao = mysql.createConnection({
    host: bd_servidor,
    port: bd_porta,
    user: bd_usuario,
    password: bd_senha,
    database: bd_banco
});
conexao.connect((error) => {
    if (error) {
        console.error("Erro ao conectar ao banco de dados:", error.message);
        return;
    }
    console.log("Conexão estabelecida com o banco de dados!");
});

module.exports = conexao;