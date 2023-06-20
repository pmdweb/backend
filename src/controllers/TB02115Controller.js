const Oss = require("../models/TB02115");

module.exports = {
	async index(req, res) {
		const oss = await Oss.findAll();
		return res.status(200).json(oss);
	},
	async getOsById(req, res) {
		const os = await Oss.findByPk(req.params.codigo);
		return res.status(200).json(os);
	},
	async getOssByCliente(req, res) {
		const oss = await Oss.findAll({
			where: {
				TB02115_CODCLI: req.params.codigo,
				TB02115_DTFECHA: null,
			},
		});
		return res.status(200).json(oss);
	},
	async update(req, res) {
		try {
			const id = req.params.codigo;
			const { TB02115_DTALT, TB02115_OPALT, TB02115_STATUS, TB02115_CODTEC, STATUS_ANTERIOR, TECNICO_ANTERIOR } = req.body;

			const os = await Oss.findOne({
				where: {
					TB02115_CODIGO: id,
					TB02115_CODTEC: TECNICO_ANTERIOR,
					TB02115_STATUS: STATUS_ANTERIOR
				},
			});

				if (!os) {
					res.status(404).json({
						message: "Nenhuma OS encontrada com o código :" + id + ", o técnico: "+TECNICO_ANTERIOR+" e o Status: "+STATUS_ANTERIOR+"!<br/ > Favor conferir histórico de alteração de status da OS.",
					});
				} else {
					await Oss.update(
						{
							TB02115_DTALT,
							TB02115_OPALT,
							TB02115_STATUS,
							TB02115_CODTEC
						},
						{
							where: {
								TB02115_CODIGO: id,
							},
						}
					);
			res.status(200).json({
				message: 'OS [' + id + '] atualizada com sucesso para o status [' + TB02115_STATUS + '] e o técnico [' + TB02115_CODTEC + '].'
			});
			}
		} catch (error) {
			res.status(400).json(error);
		}
	},
};
