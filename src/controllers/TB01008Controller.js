const Cliente = require('../models/TB01008');

module.exports = {
    async index(req,res) {
        const clients = await Cliente.findAll();
        return res.json(clients);
    },
    async getClientById(req, res) {
        const client = await Cliente.findByPk(req.params.codigo);
        return res.json(client);
    }
}