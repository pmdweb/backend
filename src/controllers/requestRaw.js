const connection = require('../database/index');
const { QueryTypes } = require('sequelize');

module.exports = {
	async raw(req, res) {
		try {
			const qry = await connection.query(
				"SELECT * FROM " + req.params.table,
				{
					raw: true,
					type: QueryTypes.SELECT
				}
			);
			return res.status(200).json(qry);
		} catch (error) {
			return res.status(400).json(error);
		}

	},
	async rawUltimoStatus(req, res) {
		const statuses = JSON.parse(process.env.STATUS_TRIAGEM)
		try {
			const os = req.params.os
			const query = `
			SELECT TOP 1 TB02130_STATUS
			FROM TB02130
			WHERE TB02130_CODIGO = ${os}
			  AND TB02130_TIPO = 'O'
			  AND TB02130_STATUS IN (${statuses}) 
			ORDER BY TB02130_DATA DESC
			`;
			//TODO Buscar status da variável de ambiente
			const qry = await connection.query(
				query,
				{
					raw: true,
					type: QueryTypes.SELECT
				}
			);
			return res.status(200).json(qry[0].TB02130_STATUS);
		} catch (error) {
			return res.status(400).json(error);
		}
	},
	async rawListaAreasIntervencao(req, res) {
		try {
			const query = `
			SELECT *
			FROM TB01097
			`;
			const qry = await connection.query(
				query,
				{
					raw: true,
					type: QueryTypes.SELECT
				}
			);
			return res.status(200).json(qry);
		} catch (error) {
			return res.status(400).json(error);
		}
	},
	async rawGetCitiesByArea(req, res) {
		const area = req.params.area;
		try {
			const query = `SELECT TB01098_CIDADE,TB01098_ESTADO FROM TB01098 WHERE TB01098_AREA = '${area}'`;
			const qry = await connection.query(
				query,
				{
					raw: true,
					type: QueryTypes.SELECT
				}
			);
			return res.status(200).json(qry);
		} catch (error) {
			return res.status(400).json(error);
		}
	},
	async rawDefeitosById(req, res) {
		try {
			const os = await connection.query(
				`SELECT * FROM TB02116 WHERE TB02116_CODIGO = ${req.params.codigo}`,
				{
					raw: true,
					type: QueryTypes.SELECT
				}
			);
			const result = await Promise.all(
				os.map(async (item) => {
					const defeito = await connection.query(
						`SELECT * FROM TB01048 WHERE TB01048_CODIGO = '${item.TB02116_DEFEITO}'`,
						{
							raw: true,
							type: QueryTypes.SELECT
						}
					);
					return {
						...item,
						TB01048: defeito[0]
					};
				})
			);
			return res.status(200).json(result);
		} catch (error) {
			return res.status(400).json(error);
		}
	},
	async rawStoreEntrega(req, res) {
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
			SELECT ?, ?, ?, ?, ?
			WHERE NOT EXISTS (SELECT 1 FROM [dbo].[TB02096] WHERE [TB02096_CODIGO] = ?);
		  `;

			const result = await connection.query(query, {
				replacements: [TB02096_CODIGO, TB02096_TIPO, TB02096_MOTORISTA, TB02096_CODMOTO, TB02096_DTENTREGA, TB02096_CODIGO]
			});

			if (result[1] === 1) {
				res.status(201).json({
					message: `Entrega criada com sucesso para a venda: ${TB02096_CODIGO}`
				});
			} else {
				res.status(409).json({
					message: `${TB02096_CODIGO} Já existe no servidor.`
				});
			}
		} catch (error) {
			res.status(400).json(error);
		}
	},
	async rawUpdateEntrega(req, res) {
		const entrega = req.params.codigo
		try {
			const {
				TB02096_TIPO,
				TB02096_MOTORISTA,
				TB02096_CODMOTO,
				TB02096_DTENTREGA
			} = req.body;

			const querySearch = `SELECT [TB02096_CODIGO] FROM [dbo].[TB02096] WHERE [TB02096_CODIGO] = ?`;

			const searchResult = await connection.query(querySearch, {
				replacements: [entrega]
			});

			if (searchResult[0].length === 0) {
				return res.status(404).json({
					message: `Registro com TB02096_CODIGO ${entrega} não encontrado.`
				});
			}

			const queryUpdate = `
			UPDATE [dbo].[TB02096]
			SET [TB02096_TIPO] = ?,
				[TB02096_MOTORISTA] = ?,
				[TB02096_CODMOTO] = ?,
				[TB02096_DTENTREGA] = ?
			WHERE [TB02096_CODIGO] = ?;
		  `;

			await connection.query(queryUpdate, {
				replacements: [TB02096_TIPO, TB02096_MOTORISTA, TB02096_CODMOTO, TB02096_DTENTREGA, entrega]
			});

			res.status(200).json({
				message: `Registro com TB02096_CODIGO ${entrega} atualizado com sucesso.`
			});
		} catch (error) {
			res.status(400).json(error);
		}
	}
}