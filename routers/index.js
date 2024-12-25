const routerAtendimento = require('./atendimentoRouters');

module.exports = (app) => {
    app.use(routerAtendimento);
};