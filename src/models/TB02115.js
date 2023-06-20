const { Model, DataTypes } = require('sequelize')

class TB02115 extends Model {
    static init(sequelize) {
        super.init({
            TB02115_DTCAD: {
                type: 'SMALLDATETIME',
                allowNull: true
            },
            TB02115_OPCAD: {
                type: DataTypes.STRING(20),
                allowNull: true
            },
            TB02115_DTALT: {
                type: 'SMALLDATETIME',
                allowNull: true
            },
            TB02115_OPALT: {
                type: DataTypes.STRING(20),
                allowNull: true
            },
            TB02115_CODIGO: {
                type: DataTypes.STRING(8),
                allowNull: false,
                primaryKey: true
            },
            TB02115_PREVENTIVA: {
                type: DataTypes.STRING(1),
                allowNull: false,
                primaryKey: false
            },
            TB02115_CODEMP: {
                type: DataTypes.STRING(2),
                allowNull: true
            },
            TB02115_CONTRATO: {
                type: DataTypes.STRING(12),
                allowNull: true
            },
            TB02115_CODCLI: {
                type: DataTypes.STRING(8),
                allowNull: true,
                references: {
                    model: 'TB01008',
                    key: 'TB01008_CODIGO'
                }
            },
            TB02115_PRODUTO: {
                type: DataTypes.STRING(5),
                allowNull: true,
                references: {
                    model: 'TB01010',
                    key: 'TB01010_CODIGO'
                }
            },
            TB02115_NUMSERIE: {
                type: DataTypes.STRING(50),
                allowNull: true
            },
            TB02115_ATENDENTE: {
                type: DataTypes.STRING(30),
                allowNull: true
            },
            TB02115_SOLICITANTE: {
                type: DataTypes.STRING(30),
                allowNull: true
            },
            TB02115_NOME: { // MOTIVO
                type: DataTypes.STRING(50),
                allowNull: true
            },
            TB02115_OS: { // OS ANTERIOR( REINCIDÊNCIA)
                type: DataTypes.STRING(6),
                allowNull: true
            },
            TB02115_REINCIDENCIA: {
                type: DataTypes.STRING(1),
                allowNull: true
            },
            TB02115_SITUACAO: {
                type: DataTypes.STRING(1),
                allowNull: true
            },
            TB02115_CIDADE: {
                type: DataTypes.STRING(1),
                allowNull: true
            },
            TB02115_ESTADO: {
                type: DataTypes.STRING(1),
                allowNull: true
            },
            TB02115_ORDEM: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            TB02115_STATUS: {
                type: DataTypes.STRING(2),
                allowNull: true,
                references: {
                    model: 'TB01073',
                    key: 'TB01073_CODIGO'
                }
            },
            TB02115_CODTEC: {
                type: DataTypes.STRING(4),
                allowNull: true,
                references: {
                    model: 'TB01024',
                    key: 'TB01024_CODIGO'
                }
            },
            TB02115_PREST: {
                type: DataTypes.STRING(4),
                allowNull: true,
                references: {
                    model: 'TB01017',
                    key: 'TB01017_CODIGO'
                }
            },
            TB02115_DATA: {
                type: DataTypes.DATE,
                allowNull: true
            },
            TB02115_DTFECHA: {
                type: DataTypes.DATE,
                allowNull: true
            }
        },
        {
            sequelize,
            tableName: 'TB02115',
            schema: 'dbo',
            timestamps: false
        }
        )
    }
}

module.exports = TB02115
