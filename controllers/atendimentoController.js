const atendimentoModel = require("../models/atendimentoModel");

class AtendimentoControler{
    buscar(){
        return atendimentoModel.listar();
    }
    criar(novoAtendimento){
        return atendimentoModel.criar(novoAtendimento);
    }
    atualizar(atendimentoAtualizado, id){
        return atendimentoModel.atualizar(atendimentoAtualizado, id);
    }
    apagar(id){
        return atendimentoModel.apagar(id);
    }
};

module.exports = new AtendimentoControler();