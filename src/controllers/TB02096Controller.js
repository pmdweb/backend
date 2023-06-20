const Entrega = require("../models/TB02096");

module.exports = {
	async index(req, res) {
		const entregas = await Entrega.findAll();
		return res.status(200).json(entregas);
	},
	async getById(req, res) {
		const { id } = req.params;
		const entregas = await Entrega.findByPk(id);
		return res.status(200).json(entregas);
	},
	async store(req, res) {
		try {
			const {
			  TB02096_CODIGO,
			  TB02096_TIPO,
			  TB02096_MOTORISTA,
			  TB02096_CODMOTO,
			  TB02096_DTENTREGA
			} = req.body;
		
			const query = `
			  INSERT INTO [dbo].[TB02096]
			  ([TB02096_CODIGO], [TB02096_TIPO], [TB02096_MOTORISTA], [TB02096_CODMOTO], [TB02096_DTENTREGA])
			  VALUES (?, ?, ?, ?, ?);
			`;
		
			await Entrega.query(query, {
			  replacements: [TB02096_CODIGO, TB02096_TIPO, TB02096_MOTORISTA, TB02096_CODMOTO, TB02096_DTENTREGA]
			});
		
			res.status(200).json({
			  message: 'Entrega criada com sucesso.'
			});
		} catch (error) {
			console.log(error)
			res.status(400).json(error);
		  }
	}

}