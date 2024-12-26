const { Router } = require('express');
const router = Router();
const atendimentoController = require('../controllers/atendimentoController');

// router.get("/atendimento", (req, res) => {
//     try {
//         const atendimento = atendimentoController.buscar(); // Chama a função de forma síncrona
//         res.status(200).json(atendimento); // Envia a resposta com os atendimentos
//     } catch (error) {
//         res.status(400).json({ message: error.message }); // Trate o erro de forma adequada
//     }
// });

router.get("/atendimento", (req, res) => {
    atendimentoController.buscar()
        .then(atendimento => {
            res.status(200).json(atendimento);  // Envia a resposta com os atendimentos
        })
        .catch(error => {
            res.status(400).json({ message: error.message });  // Trate o erro de forma adequada
        });
});


router.post("/atendimento", (req, res) => {
    const novoAtendimento = req.body;
    const atendimento = atendimentoController.criar(novoAtendimento);
    atendimento
    .then(atendimentoCriado => {
        res.status(201).json(atendimentoCriado);
    })
    .catch(error => {
        res.status(400).json({message: error.message});
    })
});

router.put("/atendimento/:id", (req, res) => {
    const {id} = req.params;
    const atendimentoAtualizado = req.body;
    const atendimento = atendimentoController.atualizar(atendimentoAtualizado, id);
    atendimento
        .then((resultAtendimentoAtualizado) => {
            res.status(200).json(resultAtendimentoAtualizado);
        }) 
        .catch(error => {
            res.status(400).json({message : error.message});
        })
});

router.delete("/atendimento/:id", (req, res) => {
    const resposta = atendimentoController.apagar(id);
    const id = req.params;
    res.send(resposta);
});

module.exports = router;