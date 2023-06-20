const VwEntrega = require('../models/VW_PMD_ENTREGA');


module.exports = {
	async index(req, res) {
		try {
			const VW = await VwEntrega.findAll();
			if (!VW) {
				res.status(404).json({
					message: "Nenhuma ENTREGA encontrada!",
				});
			} else {
				return res.status(200).json(VW);
			}
		} catch (error) {
			res.status(400).json(error);
		}
	},
	async getById(req, res) {
		try {
			const id = req.params.id;
			const VW = await VwEntrega.findByPk(id);
			if (!VW) {
				res.status(404).json({
					message: "Nenhuma ENTREGA encontrada com o código:" + id + "!",
				});
			} else {
				return res.status(200).json(VW);
			}
		} catch (error) {
			res.status(400).json(error);
		}
	},
	async expedicao(req, res) {

		const status = JSON.parse(process.env.STATUS_EXPEDICAO)
		try {
			const os = await VwEntrega.findAll({
				where: {
					ST_CODIGO: status,
					V_SITUACAO: 'A'
				},
				order: [
					['EMP_CODIGO', 'ASC'],
					['ST_CODIGO', 'ASC']
				],
			});
			console.log(os);
			return res.status(200).json(os);
		} catch (error) {
			return res.status(400).json(error);
		}
	},
	async getByMotorista(req, res) {
		const codigo = req.params.codigo;
		const status = process.env.STATUS_DISP_ENTREGA
		try {
			const os = await VwEntrega.findAll({
				where: {
					MOT_CODIGO: codigo,
					ST_CODIGO: status,
					V_SITUACAO: 'A'
				},
				order: [
					['EMP_CODIGO', 'ASC'],
					['ST_CODIGO', 'ASC']
				],
			});
			return res.status(200).json(os);
		} catch (error) {
			return res.status(400).json(error);
		}
	},
	async getConfigs(req, res) {
		try {
			const configs = {
				STATUS_EXPEDICAO: JSON.parse(process.env.STATUS_EXPEDICAO),
				STATUS_DISP_ENTREGA:process.env.STATUS_DISP_ENTREGA
			}
			return res.status(200).json(configs);
		} catch (error) {
			return res.status(400).json(error);
		}
	},
}