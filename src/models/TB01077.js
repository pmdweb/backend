const { Model, DataTypes } = require('sequelize');

class TB01077 extends Model {
    static init(sequelize) {
        super.init({
            TB01077_CODIGO: {
                type: DataTypes.STRING(2),
				allowNull: false,
				primaryKey: true
            },
            TB01077_NOME: {
                type: DataTypes.STRING(60),
                allowNull: false
            },
            TB01077_SITUACAO: {
                type: DataTypes.STRING(1),
				allowNull: false,
				validate: {
					isIn:[['A','I']]
				}
            }
        },
        {
            sequelize,
            tableName: 'TB01077',
            schema: 'dbo',
            timestamps: false,
            primaryKey: 'TB01077_CODIGO',
        }
        )
    }
}

module.exports = TB01077