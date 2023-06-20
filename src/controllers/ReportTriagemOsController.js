const Os = require('../models/TB02115');

module.exports = {
    async triagem(req, res) {
        try {
            const os = await Os.findAll({
                where: {
                    TB02115_STATUS: JSON.parse(process.env.STATUS_TRIAGEM),
                    TB02115_DTFECHA: null
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
