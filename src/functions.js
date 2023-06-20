const ConfigGerais = require('./models/TB00040');
const Tecnicos = require('./models/TB01024');
require('dotenv').config();

module.exports = {
	async getConfig(req,res) {
		try {
			return await ConfigGerais.findAll();
		} catch (error) {
			return res.status(400).json(error);
		}
	},
	async getTecnicos(req, res) {
		try {
			return await Tecnicos.findAll();
		} catch (error) {
			return res.status(400).json(error);
		}
	}
}