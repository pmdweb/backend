const { sequelize } = require('sequelize');
const Historico = require('../models/TB02130');

module.exports = {
	async index(req, res) {
		const hist = await Historico.findAll();
		return res.status(200).json(hist);
	},
	async getOsById(req, res) {
		const hist = await Historico.findByPk(req.params.codigo);
		return res.status(200).json(hist);
	},
	async getHistoricoByOs(req, res) {
		const os = req.params.os;
		const hist = await Historico.findAll({
			where: {
				TB02130_CODIGO: os,
				TB02130_TIPO: "O"
			}
		});
		console.log(os);
		return res.status(200).json(hist);
	},
	async store(req, res) {
		try {
			const {
				TB02130_CODIGO,
				TB02130_DATA,
				TB02130_USER,
				TB02130_STATUS,
				TB02130_NOME,
				TB02130_TIPO,
				TB02130_CODCAD,
				TB02130_CODEMP,
				TB02130_OBS,
				TB02130_OBSINT,
				TB02130_CODTEC,
				TB02130_NOMETEC,
				TB02130_PREVISAO,
				TB02130_DATAEXEC,
				TB02130_HORASCOM,
				TB02130_HORASFIM
			} = req.body;
			const hist = await Historico.create({
				TB02130_CODIGO,
				TB02130_DATA,
				TB02130_USER,
				TB02130_STATUS,
				TB02130_NOME,
				TB02130_TIPO,
				TB02130_CODCAD,
				TB02130_CODEMP,
				TB02130_OBS,
				TB02130_OBSINT,
				TB02130_CODTEC,
				TB02130_NOMETEC,
				TB02130_PREVISAO,
				TB02130_DATAEXEC,
				TB02130_HORASCOM,
				TB02130_HORASFIM
			});
			res.status(200).json({
				message: 'histórico criado com suscesso. OS: '+TB02130_CODIGO+' - Técnico: '+TB02130_NOMETEC+' - Status: '+TB02130_NOME 
			});
		} catch (error) {
			res.status(400).json(error);
		}
	},
	async storeVenda(req, res) {
		try {
			const {
				TB02130_CODIGO,
				TB02130_DATA,
				TB02130_USER,
				TB02130_STATUS,
				TB02130_NOME,
				TB02130_TIPO,
				TB02130_CODCAD,
				TB02130_CODEMP,
				TB02130_OBS,
				TB02130_OBSINT,
				TB02130_CODTEC,
				TB02130_NOMETEC,
				TB02130_PREVISAO,
				TB02130_DATAEXEC,
				TB02130_HORASCOM,
				TB02130_HORASFIM
			} = req.body;
			const hist = await Historico.create({
				TB02130_CODIGO,
				TB02130_DATA,
				TB02130_USER,
				TB02130_STATUS,
				TB02130_NOME,
				TB02130_TIPO,
				TB02130_CODCAD,
				TB02130_CODEMP,
				TB02130_OBS,
				TB02130_OBSINT,
				TB02130_CODTEC,
				TB02130_NOMETEC,
				TB02130_PREVISAO,
				TB02130_DATAEXEC,
				TB02130_HORASCOM,
				TB02130_HORASFIM
			});
			res.status(200).json({
				message: 'histórico criado com suscesso. Venda: '+TB02130_CODIGO+' - Status: '+TB02130_NOME 
			});
		} catch (error) {
			res.status(400).json(error);
		}
	}
}