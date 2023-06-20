const { Model, DataTypes } = require('sequelize');

class TB01066 extends Model {
    static init(sequelize) {
        super.init({
            TB01066_CODCLI: {
                type: DataTypes.STRING(8),
				allowNull: false,
				primaryKey: true
            },
            TB01066_CODUSER: {
                type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true
            },
            TB01066_LOGIN: {
                type: DataTypes.STRING(50),
                allowNull: true
            },
            TB01066_SENHA: {
                type: DataTypes.STRING(50),
                allowNull: true
            },
            TB01066_TIPO: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            TB01066_NOME: {
                type: DataTypes.STRING(60),
                allowNull: true
            },
            TB01066_EMAIL: {
                type: DataTypes.STRING(50),
                allowNull: true
            },
            TB01066_GRAFICOS: {
                type: DataTypes.INTEGER,
				allowNull: true,
				validate: {
					isIn:[[0,1]]
				}
			},
            TB01066_GRAFICOS2: {
                type: DataTypes.INTEGER,
				allowNull: true,
				validate: {
					isIn:[[0,1]]
				}
            },
            TB01066_SITUACAO: {
                type: DataTypes.STRING(1),
				allowNull: true,
				validate: {
					isIn:[['A','I']]
				}
            }
        },
        {
            sequelize,
            tableName: 'TB01066',
            schema: 'dbo',
            timestamps: false,
            primaryKey: ['TB01066_CODCLI','TB01066_CODUSER'],
        }
        )
    }
}

module.exports = TB01066