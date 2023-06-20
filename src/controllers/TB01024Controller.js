const Tecnicos = require('../models/TB01024');

module.exports = {
    async index(req,res) {
        const tecnicos = await Tecnicos.findAll({
			where: {
				TB01024_SITUACAO: 'A'
			},
		});
        return res.status(200).json(tecnicos);
    },
	async nome(req, res) {
		try {
			const tecnico = await Tecnicos.findByPk(req.params.codtec);
			if (!tecnico) {
				res.status(404).json({
					message: "Nenhuma OS encontrada com o código :" + id + "!",
				});
			} else {
				return res.status(200).json(tecnico);
			}
		} catch (error) {
			res.status(400).json(error);   
		}

    }
}