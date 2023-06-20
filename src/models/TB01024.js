const { Model, DataTypes } = require('sequelize')

class TB01024 extends Model {
    static init(sequelize) {
        super.init({
            TB01024_CODIGO: {
                type: DataTypes.STRING(4),
				allowNull: false,
				primaryKey: true
            },
            TB01024_NOME: {
                type: DataTypes.STRING(60),
                allowNull: false
            },
            TB01024_SITUACAO: {
                type: DataTypes.STRING(1),
				allowNull: false,
				validate: {
					isIn:[['A','I']]
				}
            },
            TB01024_OBS: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            TB01024_CPF: {
                type: DataTypes.STRING(11),
                allowNull: false
            }
        },
        {
            sequelize,
            tableName: 'TB01024',
            schema: 'dbo',
            timestamps: false,
            primaryKey: 'TB01024_CODIGO',
        }
        )
    }
}

module.exports = TB01024
