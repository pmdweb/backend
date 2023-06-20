const { Model, DataTypes } = require('sequelize');

class TB01007 extends Model {
    static init(sequelize) {
        super.init({
            TB01007_CODIGO: {
                type: DataTypes.STRING(2),
				allowNull: false,
				primaryKey: true
            },
            TB01007_NOME: {
                type: DataTypes.STRING(60),
                allowNull: false
            },
            TB01007_CNPJ: {
                type: DataTypes.STRING(14),
                allowNull: false
            },
            TB01007_ARQUIVOLOGO: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            TB01007_SITUACAO: {
                type: DataTypes.STRING(1),
				allowNull: false,
				validate: {
					isIn:[['A','I']]
				}
            }
        },
        {
            sequelize,
            tableName: 'TB01007',
            schema: 'dbo',
            timestamps: false,
            primaryKey: 'TB01007_CODIGO',
        }
        )
    }
}

module.exports = TB01007