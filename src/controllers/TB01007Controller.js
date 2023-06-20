const TB01007 = require('../models/TB01007'); // TABELA TB01007 = Status de Outsourcing

module.exports = {
	async index(req, res) {
		try {
			const var_TB01007 = await TB01007.findAll({
				where: {
					TB01007_SITUACAO: "A"
				}
			});
			if (!var_TB01007) {
				res.status(404).json({
					message: "Nenhuma empresa encontrada!",
				});
			} else {
				return res.status(200).json(var_TB01007);
			}
		} catch (error) {
			res.status(400).json(error);
		}
	},
	async getById(req, res) {
		try {
			const id = req.params.codigo;
			const var_TB01007 = await TB01007.findAll({
				where: {
					TB01007_CODIGO: req.params.codigo,
					TB01007_SITUACAO: "A"
				}
			});
			if (!var_TB01007) {
				res.status(404).json({
					message: "Nenhuma empresa encontrada com o código:" + id + "!",
				});
			} else {
				return res.status(200).json(var_TB01007);
			}
		} catch (error) {
			res.status(400).json(error);
		}
	}

}

