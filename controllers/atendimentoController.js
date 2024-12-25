class AtendimentoControler{
    buscar(){
        return "Buscando atendimentos...";
    }
    criar(){
        return "Atendimento criado!";
    }
    atualizar(id){
        return `Atendimento ${id} atualizado!`;
    }
    apagar(id){
        return `Atencimento ${id} apagado com sucesso!`;
    }
};

module.exports = new AtendimentoControler();