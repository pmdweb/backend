const { Model, DataTypes } = require('sequelize')

class VW_PMD_OS extends Model {
    static init(sequelize) {
        super.init({
            OS_CODIGO: {
                type: DataTypes.STRING(6),
				allowNull: false,
				primaryKey: true
            },
            OS_CONTRATO: {
				type: DataTypes.STRING(12),
                allowNull: false
			},
            CLI_CODIGO: {
				type: DataTypes.STRING(8),
                allowNull: false
			},
            CLI_NOME: {
				type: DataTypes.STRING(60),
                allowNull: true
			},
			OS_NUMSERIE: {
				type: DataTypes.STRING(50),
				allowNull: false
			},
            PR_CODIGO: {
                type: DataTypes.STRING(5),
                allowNull: false
            },
            PR_NOME: {
                type: DataTypes.STRING(60),
                allowNull: false
            },
            PR_REFERENCIA: {
                type: DataTypes.STRING(20),
                allowNull: false
            },
            OS_MOTIVO: {
                type: DataTypes.STRING(50),
                allowNull: true
            },
            TEC_CODIGO: {
                type: DataTypes.STRING(4),
                allowNull: false
            },
            TEC_NOME: {
                type: DataTypes.STRING(60),
                allowNull: true
            },
            ST_CODIGO: {
                type: DataTypes.STRING(2),
                allowNull: false
            },
            ST_NOME: {
                type: DataTypes.STRING(60),
                allowNull: false
            },
            EMP_CODIGO: {
                type: DataTypes.STRING(2),
                allowNull: false
            },
            EMP_NOME: {
                type: DataTypes.STRING(60),
                allowNull: false
			},
            OS_DATA: {
                type: DataTypes.DATE,
                allowNull: true
			},
            OS_ATENDENTE: {
                type: DataTypes.STRING(30),
                allowNull: true
			},
            OS_SOLICITANTE: {
                type: DataTypes.STRING(30),
                allowNull: true
			},
            OS_LOCAL: {
                type: DataTypes.STRING(30),
                allowNull: true
			},
            OS_ORIGEM: {
				type: DataTypes.STRING(1),
                allowNull: true
			},
            OS_TIPO: {
				type: DataTypes.STRING(1),
                allowNull: true
			},
            OS_ORDEM: {
				type: DataTypes.INTEGER,
                allowNull: true
			},
			OS_SLA: {
				type: DataTypes.INTEGER,
				allowNull: true
			},
			OS_CEP: {
				type: DataTypes.STRING(8),
				allowNull: true
			},
			OS_ENDERECO: {
				type: DataTypes.STRING(60),
				allowNull: true
			},
			OS_NUMERO: {
				type: DataTypes.INTEGER,
				allowNull: true
			},
			OS_COMPLEMENTO: {
				type: DataTypes.STRING(20),
				allowNull: true
			},
			OS_BAIRRO: {
				type: DataTypes.STRING(30),
				allowNull: true
			},
			OS_CIDADE: {
				type: DataTypes.STRING(30),
				allowNull: true
			},
			OS_ESTADO: {
				type: DataTypes.STRING(2),
				allowNull: true
			},
			OS_CONTATO: {
				type: DataTypes.STRING(30),
				allowNull: true
			},
			OS_EMAIL: {
				type: DataTypes.STRING(200),
				allowNull: true
			},
			OS_TELEFONE: {
				type: DataTypes.STRING(11),
				allowNull: true
			},
			OS_TELEFONE2: {
				type: DataTypes.STRING(11),
				allowNull: true
			},
			OS_CELULAR: {
				type: DataTypes.STRING(11),
				allowNull: true
			},
			DEP_CODIGO: {
				type: DataTypes.STRING(6),
				allowNull: true
			},
			DEP_NOME: {
				type: DataTypes.STRING(225),
				allowNull: true
			},
			SITE_CODIGO: {
				type: DataTypes.STRING(6),
				allowNull: true
			},
			SITE_NOME: {
				type: DataTypes.STRING(225),
				allowNull: true
			},
			SITE_CEP: {
				type: DataTypes.STRING(8),
				allowNull: true
			},
			SITE_ENDERECO: {
				type: DataTypes.STRING(60),
				allowNull: true
			},
			SITE_NUMERO: {
				type: DataTypes.INTEGER,
				allowNull: true
			},
			SITE_COMPLEMENTO: {
				type: DataTypes.STRING(20),
				allowNull: true
			},
			SITE_BAIRRO: {
				type: DataTypes.STRING(30),
				allowNull: true
			},
			SITE_CIDADE: {
				type: DataTypes.STRING(30),
				allowNull: true
			},
			SITE_ESTADO: {
				type: DataTypes.STRING(2),
				allowNull: true
			},
			SITE_CONTATO: {
				type: DataTypes.STRING(30),
				allowNull: true
			},
			SITE_EMAIL: {
				type: DataTypes.STRING(200),
				allowNull: true
			},
			SITE_TELEFONE: {
				type: DataTypes.STRING(11),
				allowNull: true
			},
			OS_OBSERVACAO: {
				type: DataTypes.TEXT,
				allowNull: true
			},
			OS_SITUACAO: {
				type: DataTypes.STRING(1),
				allowNull: false
			},
			OS_DTFECHAMENTO: {
				type: DataTypes.DATE,
				allowNull: true
			},
			OS_CREATED_AT: {
				type: DataTypes.DATE,
				allowNull: true
			},
			OS_UPDATED_AT: {
				type: DataTypes.DATE,
				allowNull: true
			},
			OS_CREATED_BY: {
				type: DataTypes.STRING(20),
				allowNull: false
			},
			OS_UPDATED_BY: {
				type: DataTypes.STRING(20),
				allowNull: false
			},
        },
        {
            sequelize,
            tableName: 'VW_PMD_OS',
            schema: 'dbo',
            timestamps: false,
            primaryKey: 'OS_CODIGO',
        }
        )
    }
}

module.exports = VW_PMD_OS