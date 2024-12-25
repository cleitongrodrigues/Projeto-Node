const {Router} = require('express');
const router = Router();
const AtendimentoControler = require("../controllers/atendimentoController");
const atendimentoController = require('../controllers/atendimentoController');

router.get("/atendimentos", (req, res) => {
    const resposta = atendimentoController.buscar();
    res.send(resposta);
});

router.post("/atendimento", (req, res) => {
    const resposta = atendimentoController.criar();
    res.send(resposta);
});

router.put("/atendimento/:id", (req, res) => {
    const resposta = atendimentoController.atualizar(id);
    const id = req.params;
    res.send(resposta);
});

router.delete("/atendimento/:id", (req, res) => {
    const resposta = atendimentoController.apagar(id);
    const id = req.params;
    res.send(resposta);
});

module.exports = router;