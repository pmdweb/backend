const TB00012 = require('../models/TB00012'); // TABELA TB00012 = ENDEREÇO
module.exports = {
	async index(req, res) {
		try {
			const var_TB00012 = await TB00012.findAll();
			if (!var_TB00012) {
				res.status(404).json({
					message: "Nenhuma Endereço encontrado!",
				});
			} else {
				return res.status(200).json(var_TB00012);
			}
		} catch (error) {
			res.status(400).json(error);
		}
	},
	async getByTecnico(req, res) {
		try {
			const id = req.params.codigo;
			const var_TB00012 = await TB00012.findAll({
				where: {
					TB00012_CODIGO: req.params.codigo,
					TB00012_TABELA: "TB01024"
				}
			});
			if (!var_TB00012) {
				res.status(404).json({
					message: "Nenhuma endereço encontrado para o técnico:" + id + "!",
				});
			} else {
				return res.status(200).json(var_TB00012);
			}
		} catch (error) {
			res.status(400).json(error);
		}
	}

}

