const { Model, DataTypes } = require('sequelize')

class VW_PMD_ENTREGA extends Model {
	static init(sequelize) {
		super.init({
			V_CODIGO: {
				type: DataTypes.STRING(6),
				allowNull: false,
				primaryKey: true
            },
			V_DATA: {
				type: DataTypes.DATE,
				allowNull: true
			},
			V_DATA_EXEC: {
				type: DataTypes.DATE,
				allowNull: true
			},
			EMP_CODIGO: {
				type: DataTypes.STRING(2),
				allowNull: false
			},
			EMP_NOME: {
				type: DataTypes.STRING(60),
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
            V_NUMORC: {
				type: DataTypes.STRING(12),
                allowNull: false
			},
			V_NOTA: {
				type: DataTypes.STRING(6),
				allowNull: false
			},
			V_OBS: {
				type: DataTypes.TEXT,
				allowNull: true
			},
            V_QTD: {
				type: DataTypes.DECIMAL(11,3),
                allowNull: false
            },
			V_SITUACAO: {
				type: DataTypes.STRING(1),
				allowNull: false
			},
			ST_CODIGO: {
				type: DataTypes.STRING(2),
				allowNull: false
			},
			ST_NOME: {
				type: DataTypes.STRING(60),
				allowNull: false
			},
            VN_NOME: {
				type: DataTypes.STRING(60),
                allowNull: false
            },
			V_VLR_BRUTO: {
				type: DataTypes.DECIMAL(11,2),
				allowNull: false
			},
			V_VLR_PAGO: {
				type: DataTypes.DECIMAL(11,2),
				allowNull: false
			},
			V_VLR_NOTA: {
				type: DataTypes.DECIMAL(11,2),
				allowNull: false
			},
			V_VLR_DESCONTO: {
				type: DataTypes.DECIMAL(11,2),
				allowNull: false
			},
			V_VLR_FRETE: {
				type: DataTypes.DECIMAL(11,2),
				allowNull: false
			},
			V_VLR_FRETE2: {
				type: DataTypes.DECIMAL(11,2),
				allowNull: false
			},
            CAI_CODIGO: {
				type: DataTypes.STRING(6),
                allowNull: true
            },
            CAI_NOME: {
                type: DataTypes.STRING(60),
                allowNull: true
            },
            MOT_CODIGO: {
                type: DataTypes.STRING(4),
                allowNull: true
            },
            MOT_NOME: {
                type: DataTypes.STRING(60),
                allowNull: true
            },
            CEN_CODIGO: {
                type: DataTypes.STRING(4),
                allowNull: true
            },
            CEN_NOME: {
                type: DataTypes.STRING(60),
                allowNull: true
            },
            SUB_CODIGO: {
                type: DataTypes.STRING(4),
                allowNull: true
            },
            SUB_NOME: {
                type: DataTypes.STRING(60),
                allowNull: true
            },
            V_PLACA: {
                type: DataTypes.STRING(10),
                allowNull: true
            },
            V_UF_PLACA: {
                type: DataTypes.STRING(3),
                allowNull: true
            },
			V_PESO_BRUTO: {
				type: DataTypes.DECIMAL(9,2),
				allowNull: false
			},
			V_PESO_LIQUIDO: {
				type: DataTypes.DECIMAL(8,2),
				allowNull: false
			},
			V_QTD_VOLUMES: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			TRANSP_CODIGO: {
				type: DataTypes.STRING(4),
				allowNull: true
			},
			TRANSP_NOME: {
				type: DataTypes.STRING(60),
				allowNull: true
			},
			V_EM_TRANSITO: {
				type: DataTypes.DATE,
				allowNull: true
			},
			V_TIPO_FRETE: {
				type: DataTypes.INTEGER,
				allowNull: true
			},
			V_CONSUMIDOR_F: {
				type: DataTypes.STRING(1),
				allowNull: true
			},
			V_NOME: {
				type: DataTypes.STRING(60),
				allowNull: true
			},
			V_FONE: {
				type: DataTypes.STRING(10),
				allowNull: true
			},
			V_CREATED_AT: {
				type: DataTypes.DATE,
				allowNull: true
			},
			V_UPDATED_AT: {
				type: DataTypes.DATE,
				allowNull: true
			},
			V_CREATED_BY: {
				type: DataTypes.STRING(20),
				allowNull: false
			},
			V_UPDATED_BY: {
				type: DataTypes.STRING(20),
				allowNull: false
			},
			E_TIPO: {
				type: DataTypes.STRING(2),
				allowNull:false
			},
			E_CEP: {
				type: DataTypes.STRING(8),
				allowNull:true
			},
			E_ENDERECO: {
				type: DataTypes.STRING(60),
				allowNull:true
			},
			E_NUMERO: {
				type: DataTypes.INTEGER,
				allowNull:true
			},
			E_COMPLEMENTO: {
				type: DataTypes.STRING(20),
				allowNull:true
			},
			E_BAIRRO: {
				type: DataTypes.STRING(30),
				allowNull:true
			},
			E_CIDADE: {
				type: DataTypes.STRING(30),
				allowNull:true
			},
			E_ESTADO: {
				type: DataTypes.STRING(2),
				allowNull:true
			},
			E_CONTATO: {
				type: DataTypes.STRING(20),
				allowNull:true
			}
        },
        {
            sequelize,
            tableName: 'VW_PMD_ENTREGA',
            schema: 'dbo',
            timestamps: false,
            primaryKey: 'V_CODIGO',
        }
        )
    }
}

module.exports = VW_PMD_ENTREGA