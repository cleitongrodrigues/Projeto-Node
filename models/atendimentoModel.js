const conexao = require("../infraestrutura/connection");

class AtendimentoModel {
    listar(){
        const sql = `select * from atendimento;`;
        return new Promise((resolve, reject) => {
            conexao.query(sql, {}, (error, resposta) => {
               if (error){
                   console.log("Erro ao listar atendimentos...");
                   reject(error);
                   return;
               }
               console.log("Listagem de atendimentos!");
               resolve(resposta);
           });
        })
    }

    criar(novoAtendimento){
        const sql = `INSERT INTO atendimento set ?`
        return new Promise ((resolve, reject) => {
            conexao.query(sql, novoAtendimento, (error, resposta) => {
                if (error){
                    console.log("Erro ao criar um novo atendimento.")
                    reject(error);
                }
                console.log("Novo atendimento criado com sucesso!")
                resolve(resposta);
            } )  
        })
    }

    atualizar(atendimentoAtualizado, id){
        const sql = `update atendimento set ? where id_Atendimentos = ?`
        return new Promise ((resolve, reject) => {
            conexao.query(sql, [atendimentoAtualizado, id], (error, resposta) => {
                if (error){
                    console.log("Erro ao criar um novo atendimento.")
                    reject(error);
                }
                console.log("Novo atendimento criado com sucesso!")
                resolve(resposta);
            } )  
        })
    }
    apagar(id){
        const sql = `delete from atendimento where id_Atendimentos = ?`
        return new Promise ((resolve, reject) => {
            conexao.query(sql, [id], (error, resposta) => {
                if (error){
                    console.log("Erro ao apagar um novo atendimento.")
                    reject(error);
                }
                console.log("Atendimento apagadp com sucesso!")
                resolve(resposta);
            } )  
        })
    }
}

module.exports = new AtendimentoModel();