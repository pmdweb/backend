const VwOs = require('../models/VW_PMD_OS');
const configs = require('../functions');

module.exports = {
	async index(req, res) {
		try {
			const vwos = await VwOs.findAll();
			if (!vwos) {
				res.status(404).json({
					message: "Nenhuma Os encontrada!",
				});
			} else {
				return res.status(200).json(vwos);
			}
		} catch (error) {
			res.status(400).json(error);
		}
	},
	async getById(req, res) {
		try {
			const id = req.params.codigo;
			const vwos = await VwOs.findByPk(id);
			if (!vwos) {
				res.status(404).json({
					message: "Nenhuma OS encontrada com o código:" + id + "!",
				});
			} else {
				return res.status(200).json(vwos);
			}
		} catch (error) {
			res.status(400).json(error);
		}
	},
	async getByTecnico(req, res) {

		const id = req.params.id;
		try {
			const conf = await configs.getConfig();
			
			const statusInicial = conf[0].TB00040_STATUSINICIAL;
			const statusCheckin = conf[0].TB00040_STATUSCHECKIN;
			const statusCheckout = conf[0].TB00040_STATUSCHECKOUT;

			const os = await VwOs.findAll({
				where: {
					ST_CODIGO: [statusInicial, statusCheckin, statusCheckout],
					TEC_CODIGO: id,
					OS_DTFECHAMENTO: null,
					OS_SITUACAO: 'A'
				},
				order: [
					['EMP_CODIGO', 'ASC'],
					['ST_CODIGO', 'ASC'],
					['OS_CODIGO', 'ASC']
				],
			});
			return res.status(200).json(os);
		} catch (error) {
			return res.status(400).json(error);
		}
	},
	async getTriagem(req, res) {
        try {
            const os = await VwOs.findAll({
                where: {
                    ST_CODIGO: JSON.parse(process.env.STATUS_TRIAGEM),
                    OS_DTFECHAMENTO: null
				},
				order: [
					['EMP_CODIGO', 'ASC'],
					['ST_CODIGO', 'ASC'],
					['OS_CODIGO', 'ASC']
				],
            });
            return res.status(200).json(os);
        } catch (error) {
            return res.status(400).json(error);
        }
	}
}