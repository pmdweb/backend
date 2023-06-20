const { Model, DataTypes } = require('sequelize')

class TB02021 extends Model {
    static init(sequelize) {
        super.init({
            TB02021_DTCAD: {
                type: 'SMALLDATETIME',
                allowNull: true
            },
            TB02021_OPCAD: {
                type: DataTypes.STRING(20),
                allowNull: true
            },
            TB02021_DTALT: {
                type: 'SMALLDATETIME',
                allowNull: true
            },
            TB02021_OPALT: {
                type: DataTypes.STRING(20),
                allowNull: true
            },
            TB02021_CODIGO: {
                type: DataTypes.STRING(8),
                allowNull: false,
                primaryKey: true
            },
            TB02021_CODEMP: {
                type: DataTypes.STRING(2),
                allowNull: false,
                primaryKey: false
            },
            TB02021_CODCAI: {
                type: DataTypes.STRING(6),
                allowNull: false,
                primaryKey: false
            },
			TB02021_CODCLI: {
				type: DataTypes.STRING(8),
				allowNull: true,
				references: {
					model: 'TB01008',
					key: 'TB01008_CODIGO'
				}
			},
            TB02021_NUMORC: {
                type: DataTypes.STRING(7),
                allowNull: true
            },
            TB02021_NTFISC: {
                type: DataTypes.STRING(6),
                allowNull: true
            },
            TB02021_TIPODESC: {
                type: DataTypes.STRING(2),
                allowNull: true
            },
            TB02021_NATUREZA: {
                type: DataTypes.STRING(30),
                allowNull: true
            },
            TB02021_SITUACAO: {
                type: DataTypes.STRING(1),
                allowNull: true
            },
            TB02021_STATUS: {
                type: DataTypes.STRING(2),
                allowNull: true,
                references: {
                    model: 'TB01021',
                    key: 'TB01021_CODIGO'
                }
            },
            TB02021_DATA: {
                type: DataTypes.DATE,
                allowNull: true
            }
        },
        {
            sequelize,
            tableName: 'TB02021',
			schema: 'dbo',
			primaryKey: ['TB02021_CODEMP','TB02021_CODIGO','TB02021_CODCAI'],
            timestamps: false
        }
        )
    }
}

module.exports = TB02021
