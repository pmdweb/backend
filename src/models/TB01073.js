const { Model, DataTypes } = require('sequelize');

class TB01073 extends Model {
    static init(sequelize) {
        super.init({
            TB01073_CODIGO: {
                type: DataTypes.STRING(2),
				allowNull: false,
				primaryKey: true
            },
            TB01073_NOME: {
                type: DataTypes.STRING(60),
                allowNull: false
            },
            TB01073_SITUACAO: {
                type: DataTypes.STRING(1),
				allowNull: false,
				validate: {
					isIn:[['A','I']]
				}
            }
        },
        {
            sequelize,
            tableName: 'TB01073',
            schema: 'dbo',
            timestamps: false,
            primaryKey: 'TB01073_CODIGO',
        }
        )
    }
}

module.exports = TB01073