const { Model, DataTypes } = require('sequelize');

class TB01010 extends Model {
    static init(sequelize) {
        super.init({
            TB01010_CODIGO: {
                type: DataTypes.STRING(2),
				allowNull: false,
				primaryKey: true
            },
            TB01010_NOME: {
                type: DataTypes.STRING(60),
                allowNull: false
			},
            TB01010_RESUMIDO: {
                type: DataTypes.STRING(30),
                allowNull: true
			},
            TB01010_REFERENCIA: {
                type: DataTypes.STRING(20),
                allowNull: true
			},
            TB01010_CODAUXILIAR: {
                type: DataTypes.STRING(20),
                allowNull: true
			},
            TB01010_CODANTERIOR: {
                type: DataTypes.STRING(20),
                allowNull: true
			},
            TB01010_OBS: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            TB01010_SITUACAO: {
                type: DataTypes.STRING(1),
				allowNull: false,
				validate: {
					isIn:[['A','I']]
				}
            }
        },
        {
            sequelize,
            tableName: 'TB01010',
            schema: 'dbo',
            timestamps: false,
            primaryKey: 'TB01010_CODIGO',
        }
        )
    }
}

module.exports = TB01010