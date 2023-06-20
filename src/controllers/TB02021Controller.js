const Venda = require("../models/TB02021");

module.exports = {
	async index(req, res) {
		const vendas = await Venda.findAll();
		return res.status(200).json(vendas);
	},
	async getVendaById(req, res) {
		const { id } = req.params;
		const xVenda = await Venda.findAll({
			where: {
				TB02021_CODIGO: id
			}
		});
		return res.status(200).json(xVenda);
	},
	async update(req, res) {
		const idVenda = req.params.id;
		const { TB02021_DTALT, TB02021_OPALT, TB02021_STATUS } = req.body;
		try {
			const vendaToUpdate = await Venda.findAll({
				where: {
					TB02021_CODIGO: idVenda
				}
			})
			await Venda.update(
				{
					TB02021_DTALT,
					TB02021_OPALT,
					TB02021_STATUS
				},
				{
					where: {
						TB02021_CODIGO: idVenda,
					},
				});
			res.status(200).json({
				message: idVenda +' : '+TB02021_STATUS
			});
		} catch (error) {
			res.status(400).json(error);
		}
	}
};
