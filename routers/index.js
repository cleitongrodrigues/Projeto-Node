const routerAtendimento = require('./atendimentoRouters');

module.exports = (app, express) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended : true }));
    app.use(routerAtendimento);
};