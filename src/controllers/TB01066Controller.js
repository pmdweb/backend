const TB01066 = require('../models/TB01066'); // TABELA TB01066 = Usuários dataservice

module.exports = {
	async index(req, res) {
		try {
			const var_TB01066 = await TB01066.findAll();
			if (!var_TB01066) {
				res.status(404).json({
					message: "Nenhum usuario Encontrado!",
				});
			} else {
				return res.status(200).json(var_TB01066);
			}
		} catch (error) {
			res.status(400).json(error);
		}
	},
	async getUserById(req, res) {
		const var_TB01066 = await TB01066.findOne({
			where: {
				TB01066_CODUSER: req.params.username,
				TB01066_SITUACAO: 'A'
			},
		});
		return res.status(200).json(var_TB01066);
	},
	async login(req, res) {
		try {
			const var_TB01066 = await TB01066.findOne({
				where: {
					TB01066_LOGIN: req.body.login,
					TB01066_SENHA: req.body.password,
					TB01066_SITUACAO: 'A'
				},
			});
			return res.status(200).json(var_TB01066);
		} catch (error) {
			res.status(400).json(error);
		}
	},
}