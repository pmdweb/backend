const { Model, DataTypes } = require('sequelize')

class TB02096 extends Model {
	static init(sequelize) {
		super.init({
			TB02096_CODIGO: {
				type: DataTypes.STRING(8),
				allowNull: false,
				primaryKey: true,
				autoIncrement: false
			},
			TB02096_TIPO: {
				type: DataTypes.STRING(1),
				allowNull: false,
				primaryKey: true,
				autoIncrement: false
			},
			TB02096_MOTORISTA: {
				type: DataTypes.STRING(60),
				allowNull: true
			},
			TB02096_CODMOTO: {
				type: DataTypes.STRING(4),
				allowNull: true
			},
			TB02096_DTENTREGA: {
                type: 'SMALLDATETIME',
                allowNull: true
			}
		},
			{
				sequelize,
				tableName: 'TB02096',
				schema: 'dbo',
				//primaryKey: ['TB02096_CODIGO','TB02096_TIPO'],
				timestamps: false
			}
		)
	}
}

module.exports = TB02096