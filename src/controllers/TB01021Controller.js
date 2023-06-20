const TB01021 = require('../models/TB01021'); // TABELA TB01066 = Usuários dataservice

module.exports = {
	async index(req, res) {
		try {
			const var_TB01021 = await TB01021.findAll();
			if (!var_TB01021) {
				res.status(404).json({
					message: "Nenhum Status de venda!",
				});
			} else {
				return res.status(200).json(var_TB01021);
			}
		} catch (error) {
			res.status(400).json(error);
		}
	},
	async getById(req, res) {
		try {
			const id = req.params.codigo;
			const var_TB01021 = await TB01021.findByPk(id);
			if (!var_TB01021) {
				res.status(404).json({
					message: "Nenhum status de venda encontrado com o código:" + id + "!",
				});
			} else {
				return res.status(200).json(var_TB01021);
			}
		} catch (error) {
			res.status(400).json(error);
		}
	}
}