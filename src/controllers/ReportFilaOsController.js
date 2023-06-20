const Os = require('../models/TB02115');
const configs = require('../functions');

module.exports = {
	async fila(req, res) {
		const id = req.params.codtec;
		try {
			const conf = await configs.getConfig();
			
			const statusInicial = conf[0].TB00040_STATUSINICIAL;
			const statusCheckin = conf[0].TB00040_STATUSCHECKIN;
			const statusCheckout = conf[0].TB00040_STATUSCHECKOUT;

            const os = await Os.findAll({
                where: {
					TB02115_STATUS: [statusInicial, statusCheckin, statusCheckout],
					TB02115_CODTEC: id,
					TB02115_DTFECHA: null,
					TB02115_SITUACAO: 'A'
				},
				order: [
					['TB02115_CODEMP', 'ASC'],
					['TB02115_STATUS', 'ASC'],
					['TB02115_CODIGO', 'ASC']
				],
            });
            return res.status(200).json(os);
        } catch (error) {
            return res.status(400).json(error);
        }
    }
}