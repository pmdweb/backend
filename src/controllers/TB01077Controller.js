const TB01077 = require('../models/TB01077'); // TABELA TB01077 = Status de Outsourcing

module.exports = {
	async index(req, res) {
		try {
			const var_TB01077 = await TB01077.findAll({
				where: {
					TB01077_SITUACAO: "A"
				}
			});
			if (!var_TB01077) {
				res.status(404).json({
					message: "Nenhum motorista encontrado!",
				});
			} else {
				return res.status(200).json(var_TB01077);
			}
		} catch (error) {
			res.status(400).json(error);
		}
	},
	async getById(req, res) {
		try {
			const id = req.params.codigo;
			const var_TB01077 = await TB01077.findAll({
				where: {
					TB01077_CODIGO: req.params.codigo,
					TB01077_SITUACAO: "A"
				}
			});
			if (!var_TB01077) {
				res.status(404).json({
					message: "Nenhum motorista encontrado com o código:" + id + "!",
				});
			} else {
				return res.status(200).json(var_TB01077);
			}
		} catch (error) {
			res.status(400).json(error);
		}
	}

}

