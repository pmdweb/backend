const TB01010 = require('../models/TB01010'); // TABELA TB01010 = Cadastro de Produtos
module.exports = {
	async index(req, res) {
		try {
			const var_TB01010 = await TB01010.findAll();
			if (!var_TB01010) {
				res.status(404).json({
					message: "Nenhuma produto encontrado!",
				});
			} else {
				return res.status(200).json(var_TB01010);
			}
		} catch (error) {
			res.status(400).json(error);
		}
	},
	async getById(req, res) {
		try {
			const id = req.params.codigo;
			const var_TB01010 = await TB01010.findByPk(id);
			if (!var_TB01010) {
				res.status(404).json({
					message: "Nenhum produto encontrado com o código:" + id + "!",
				});
			} else {
				return res.status(200).json(var_TB01010);
			}
		} catch (error) {
			res.status(400).json(error);
		}
	}

}

