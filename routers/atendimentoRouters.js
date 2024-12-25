const {Router} = require('express');
const router = Router();

router.get("/atendimentos", (req, res) => {
    res.send("Requisição do GET");
});

router.post("/atendimento", (req, res) => {
    res.send("Requisição do POST");
});

router.put("/atendimento/:id", (req, res) => {
    const id = req.params;
    res.send(`Requisição do PUT ${id}`);
});

router.delete("/atendimento/:id", (req, res) => {
    const id = req.params;
    res.send(`Requisição do DELETE ${id}`);
});

module.exports = router;