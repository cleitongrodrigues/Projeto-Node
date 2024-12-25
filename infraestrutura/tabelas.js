const { error } = require("console");

class Tabelas {
    init(conexao) {
        this.conexao = conexao;
        this.criarTabelaAtendimento();
    }

    criarTabelaAtendimento(){
        const sql =
        `create table if not exists atendimento(
        id_Atendimentos int not null auto_increment,
        dt_cad_atendimento date,
        servico_Atendimento varchar(100),
        cliente varchar(100),
        status enum("ativo", "realizado", "cancelado") default "ativo",
        primary key(id_Atendimentos)
        );`;
        this.conexao.query(sql, (error) => {
            if (error) {
                console.log("Erro ao criar tabela");
                console.log(error.message);
                return;
            }
            console.log("Tabela criada com sucesso!");
        });
    }
}

module.exports = new Tabelas();