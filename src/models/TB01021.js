const { Model, DataTypes } = require('sequelize')

class TB01021 extends Model {
	static init(sequelize) {
		super.init({
			TB01021_DTCAD: {
				type: 'SMALLDATETIME',
				allowNull: true
			},
			TB01021_OPCAD: {
				type: DataTypes.STRING(20),
				allowNull: true
			},
			TB01021_DTALT: {
				type: 'SMALLDATETIME',
				allowNull: true
			},
			TB01021_OPALT: {
				type: DataTypes.STRING(20),
				allowNull: true
			},
			TB01021_CODIGO: {
				type: DataTypes.STRING(8),
				allowNull: false,
				primaryKey: true
			},
			TB01021_NOME: {
				type: DataTypes.STRING(60),
				allowNull: true
			},
			TB01021_SITUACAO: {
				type: DataTypes.STRING(1),
				allowNull: true,
				validate: {
					isIn: [['A', 'I']]
				}
			},
			TB01021_ENTSTATUS: {
				type: DataTypes.STRING(1),
				allowNull: true,
				validate: {
					isIn: [['S', 'N']]
				}
			},
		},
        {
            sequelize,
            tableName: 'TB01021',
            schema: 'dbo',
            timestamps: false,
            primaryKey: 'TB01021_CODIGO',
        }
        )
    }
}

module.exports = TB01021
