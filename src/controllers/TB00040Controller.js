const ConfigGerais = require('../models/TB00040');

module.exports = {
    async index(req,res) {
        const configs = await ConfigGerais.findAll();
        return res.json(configs);
    }
}