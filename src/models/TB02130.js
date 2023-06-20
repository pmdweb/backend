const { Model, DataTypes } = require('sequelize')

class TB02130 extends Model {
    static init(sequelize) {
        super.init({
            TB02130_DATA: {
                type: 'SMALLDATETIME',
                allowNull: false,
                primaryKey: true,
                autoIncrement: false
            },
            TB02130_USER: {
                type: DataTypes.STRING(20),
                allowNull: false,
                primaryKey: true,
                autoIncrement: false
            },
            TB02130_CODIGO: {
                type: DataTypes.STRING(7),
                allowNull: false,
                primaryKey: true,
                autoIncrement: false
            },
            TB02130_STATUS: {
                type: DataTypes.STRING(2),
                allowNull: false,
                primaryKey: true,
                autoIncrement: false,
                references: {
                    model: 'TB01073',
                    key: 'TB01073_CODIGO'
                }
            },
            TB02130_TIPO: {
                type: DataTypes.STRING(1),
                allowNull: false,
                primaryKey: true,
                autoIncrement: false
            },
            TB02130_CODEMP: {
                type: DataTypes.STRING(2),
                allowNull: false,
                primaryKey: true,
                autoIncrement: false
            },
            TB02130_CODCAD: {
                type: DataTypes.STRING(8),
                allowNull: true,
                references: {
                    model: 'TB01008',
                    key: 'TB01008_CODIGO'
                }
            },
            TB02130_NOME: {
                type: DataTypes.STRING(60),
                allowNull: true
            },
            TB02130_OBS: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            TB02130_CODTEC: {
                type: DataTypes.STRING(4),
                allowNull: true,
                references: {
                    model: 'TB01024',
                    key: 'TB01024_CODIGO'
                }
            },
            TB02130_NOMETEC: {
                type: DataTypes.STRING(60),
                allowNull: true
            },
            TB02130_DATAEXEC: {
                type: 'SMALLDATETIME',
                allowNull: true
            },
            TB02130_PREVISAO: {
                type: 'SMALLDATETIME',
                allowNull: true
            },
            TB02130_OBSINT: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            TB02130_HORASCOM: {
                type: DataTypes.STRING(5),
                allowNull: true
            },
            TB02130_HORASFIM: {
                type: DataTypes.STRING(5),
                allowNull: true
            }
        },
        {
            sequelize,
            tableName: 'TB02130',
            schema: 'dbo',
			timestamps: false,
			primaryKey: 'TB00040_CODEMP',
        }
        )
    }
}

module.exports = TB02130
