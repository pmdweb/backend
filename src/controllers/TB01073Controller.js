const TB01073 = require('../models/TB01073'); // TABELA TB01073 = Status de Outsourcing

module.exports = {
	async index(req, res) {
		try {
			const var_TB01073 = await TB01073.findAll();
			if (!var_TB01073) {
				res.status(404).json({
					message: "Nenhum status de outsourcing Encontrado!",
				});
			} else {
				return res.status(200).json(var_TB01073);
			}
		} catch (error) {
			res.status(400).json(error);
		}
	},
	async getById(req, res) {
		try {
			const id = req.params.codigo;
			const var_TB01073 = await TB01073.findByPk(id);
			if (!var_TB01073) {
				res.status(404).json({
					message: "Nenhum status de outsourcing encontrado com o código:" + id + "!",
				});
			} else {
				return res.status(200).json(var_TB01073);
			}
		} catch (error) {
			res.status(400).json(error);
		}
	}

}

