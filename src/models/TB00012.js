const { Model, DataTypes } = require('sequelize');

class TB00012 extends Model {
    static init(sequelize) {
		super.init({
			TB00012_DTCAD: {
                type: 'SMALLDATETIME',
                allowNull: true
            },
            TB00012_OPCAD: {
                type: DataTypes.STRING(20),
                allowNull: true
            },
            TB00012_DTALT: {
                type: 'SMALLDATETIME',
                allowNull: true
            },
            TB00012_OPALT: {
                type: DataTypes.STRING(20),
                allowNull: true
            },
            TB00012_CODIGO: {
                type: DataTypes.STRING(10),
				allowNull: false,
				primaryKey: true
            },
            TB00012_TABELA: {
                type: DataTypes.STRING(7),
				allowNull: false,
				primaryKey: true
            },
            TB00012_TIPO: {
                type: DataTypes.STRING(2),
				allowNull: false,
				defaultValue: '01'
			},
            TB00012_CEP: {
                type: DataTypes.STRING(8),
				allowNull: true
			},
            TB00012_END: {
                type: DataTypes.STRING(60),
				allowNull: true
			},
            TB00012_NUM: {
				type: DataTypes.INTEGER,
				allowNull: true
			},
			TB00012_COMP: {
				type: DataTypes.STRING(20),
				allowNull: true
			},
			TB00012_BAIRRO: {
				type: DataTypes.STRING(30),
				allowNull: true
			},
			TB00012_CIDADE: {
				type: DataTypes.STRING(30),
				allowNull: true
			},
			TB00012_ESTADO: {
				type: DataTypes.STRING(2),
				allowNull: true
			},
			TB00012_CONTATO: {
				type: DataTypes.STRING(20),
				allowNull: true
			},
			TB00012_FONE: {
				type: DataTypes.STRING(11),
				allowNull: true
			},
			TB00012_CELULAR: {
				type: DataTypes.STRING(11),
				allowNull: true
			},
			TB00012_CELULAR2: {
				type: DataTypes.STRING(11),
				allowNull: true
			},
			TB00012_EMAIL: {
				type: DataTypes.STRING(200),
				allowNull: true
			}
        },
        {
            sequelize,
            tableName: 'TB00012',
            schema: 'dbo',
            timestamps: false,
			primaryKey: ['TB00012_CODIGO','TB00012_TABELA'],
        }
        )
    }
}

module.exports = TB00012