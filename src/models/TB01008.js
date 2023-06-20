const { Model, DataTypes } = require('sequelize');

class TB01008 extends Model {
    static init(sequelize) {
        super.init({
            TB01008_DTCAD: {
                type: "SMALLDATETIME",
                allowNull: true
            },
            TB01008_OPCAD: {
                type: DataTypes.STRING(20),
                allowNull: true
            },
            TB01008_DTALT: {
                type: "SMALLDATETIME",
                allowNull: true
            },
            TB01008_OPALT: {
                type: DataTypes.STRING(20),
                allowNull: true
            },
            TB01008_AGENCIA: {
                type: DataTypes.STRING(15),
                allowNull: true
            },
            TB01008_BANCO: {
                type: DataTypes.STRING(15),
                allowNull: true
            },
            TB01008_CARGO: {
                type: DataTypes.STRING(60),
                allowNull: true
            },
            TB01008_CNPJ: {
                type: DataTypes.STRING(14),
                allowNull: true
            },
            TB01008_CODIGO: {
                type: DataTypes.STRING(8),
                allowNull: false,
                primaryKey: true
            },
            TB01008_CONCEITO: {
                type: DataTypes.STRING(2),
                allowNull: true,
                references: {
                    model: 'TB01020',
                    key: 'TB01020_CODIGO'
                }
            },
            TB01008_CONTA: {
                type: DataTypes.STRING(15),
                allowNull: true
            },
            TB01008_CONTENT: {
                type: DataTypes.STRING(20),
                allowNull: true
            },
            TB01008_CONTSERV: {
                type: DataTypes.STRING(1),
                allowNull: true
            },
            TB01008_CPF: {
                type: DataTypes.STRING(11),
                allowNull: true
            },
            TB01008_DESDE: {
                type: DataTypes.STRING(8),
                allowNull: true
            },
            TB01008_DTNASC: {
                type: DataTypes.DATE,
                allowNull: true
            },
            TB01008_EMPRESA: {
                type: DataTypes.STRING(2),
                allowNull: true,
                references: {
                    model: 'TB01007',
                    key: 'TB01007_CODIGO'
                }
            },
            TB01008_EMPTRAB: {
                type: DataTypes.STRING(60),
                allowNull: true
            },
            TB01008_FANTASIA: {
                type: DataTypes.STRING(60),
                allowNull: true
            },
            TB01008_FONECOM1: {
                type: DataTypes.STRING(10),
                allowNull: true
            },
            TB01008_FONECOM2: {
                type: DataTypes.STRING(10),
                allowNull: true
            },
            TB01008_FONECOM3: {
                type: DataTypes.STRING(10),
                allowNull: true
            },
            TB01008_FONEEMP: {
                type: DataTypes.STRING(10),
                allowNull: true
            },
            TB01008_HORADD: {
                type: DataTypes.DECIMAL(9, 2),
                allowNull: true,
                defaultValue: 0
            },
            TB01008_IDENT: {
                type: DataTypes.STRING(13),
                allowNull: true
            },
            TB01008_INICONTR: {
                type: DataTypes.DATE,
                allowNull: true
            },
            TB01008_INSCEST: {
                type: DataTypes.STRING(15),
                allowNull: true
            },
            TB01008_INSCMUN: {
                type: DataTypes.STRING(15),
                allowNull: true
            },
            TB01008_LIMITE: {
                type: DataTypes.DECIMAL(9, 2),
                allowNull: true,
                defaultValue: 0
            },
            TB01008_MAE: {
                type: DataTypes.STRING(60),
                allowNull: true
            },
            TB01008_NIVEL: {
                type: DataTypes.STRING(3),
                allowNull: true,
                references: {
                    model: 'TB01019',
                    key: 'TB01019_CODIGO'
                }
            },
            TB01008_NOME: {
                type: DataTypes.STRING(60),
                allowNull: true
            },
            TB01008_OBS: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            TB01008_PAI: {
                type: DataTypes.STRING(60),
                allowNull: true
            },
            TB01008_PCONTR: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0
            },
            TB01008_PESSOA: {
                type: DataTypes.STRING(1),
                allowNull: true
            },
            TB01008_QTHORA: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0
            },
            TB01008_QTSERV: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0
            },
            TB01008_REFCOM1: {
                type: DataTypes.STRING(60),
                allowNull: true
            },
            TB01008_REFCOM2: {
                type: DataTypes.STRING(60),
                allowNull: true
            },
            TB01008_REFCOM3: {
                type: DataTypes.STRING(60),
                allowNull: true
            },
            TB01008_RENDA: {
                type: DataTypes.DECIMAL(9, 2),
                allowNull: true,
                defaultValue: 0
            },
            TB01008_SITUACAO: {
                type: DataTypes.STRING(1),
                allowNull: true
            },
            TB01008_TEMPO: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0
            },
            TB01008_VENDEDOR: {
                type: DataTypes.STRING(4),
                allowNull: true,
                references: {
                    model: 'TB01006',
                    key: 'TB01006_CODIGO'
                }
            },
            TB01008_VLRCONTR: {
                type: DataTypes.DECIMAL(9, 2),
                allowNull: true,
                defaultValue: 0
            },
            TB01008_VLRSERV: {
                type: DataTypes.DECIMAL(9, 2),
                allowNull: true,
                defaultValue: 0
            },
            TB01008_CODCEN: {
                type: DataTypes.STRING(4),
                allowNull: true,
                references: {
                    model: 'TB04004',
                    key: 'TB04004_CODIGO'
                }
            },
            TB01008_CODSUB: {
                type: DataTypes.STRING(4),
                allowNull: true,
                references: {
                    model: 'TB04005',
                    key: 'TB04005_CODIGO'
                }
            },
            TB01008_PLANCON: {
                type: DataTypes.STRING(12),
                allowNull: true,
                references: {
                    model: 'TB04006',
                    key: 'TB04006_CODIGO'
                }
            },
            TB01008_DIASATENDE: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0
            },
            TB01008_DIAGERA: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 1
            },
            TB01008_DIAVENC: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 1
            },
            TB01008_CONJUGE: {
                type: DataTypes.STRING(60),
                allowNull: true
            },
            TB01008_CODTEC: {
                type: DataTypes.STRING(4),
                allowNull: true
            },
            TB01008_OBSINT: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            TB01008_VENCCONTR: {
                type: DataTypes.DATE,
                allowNull: true
            },
            TB01008_QTCDU: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0
            },
            TB01008_VLRCDU: {
                type: DataTypes.DECIMAL(11, 2),
                allowNull: true,
                defaultValue: 0
            },
            TB01008_INISIST: {
                type: DataTypes.DATE,
                allowNull: true
            },
            TB01008_VENCSIST: {
                type: DataTypes.DATE,
                allowNull: true
            },
            TB01008_SETOR: {
                type: DataTypes.STRING(4),
                allowNull: true,
                references: {
                    model: 'TB01035',
                    key: 'TB01035_CODIGO'
                }
            },
            TB01008_DTCOBTEC: {
                type: DataTypes.DATE,
                allowNull: true
            },
            TB01008_DTCOBSIS: {
                type: DataTypes.DATE,
                allowNull: true
            },
            TB01008_CONDPAG: {
                type: DataTypes.STRING(3),
                allowNull: true
            },
            TB01008_TIPDESC: {
                type: DataTypes.STRING(2),
                allowNull: true
            },
            TB01008_OBSNF: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            TB01008_VLREXTRA: {
                type: DataTypes.DECIMAL(11, 2),
                allowNull: true,
                defaultValue: 0
            },
            TB01008_DTINICIOEXTRA: {
                type: DataTypes.DATE,
                allowNull: true
            },
            TB01008_DTVENCEXTRA: {
                type: DataTypes.DATE,
                allowNull: true
            },
            TB01008_RETPIS: {
                type: DataTypes.STRING(1),
                allowNull: true,
                defaultValue: "N"
            },
            TB01008_ALIQPIS: {
                type: DataTypes.DECIMAL(11, 2),
                allowNull: true,
                defaultValue: 0
            },
            TB01008_RETCOFINS: {
                type: DataTypes.STRING(1),
                allowNull: true,
                defaultValue: "N"
            },
            TB01008_ALIQCOFINS: {
                type: DataTypes.DECIMAL(11, 2),
                allowNull: true,
                defaultValue: 0
            },
            TB01008_RETCSLL: {
                type: DataTypes.STRING(1),
                allowNull: true,
                defaultValue: "N"
            },
            TB01008_ALIQCSLL: {
                type: DataTypes.DECIMAL(11, 2),
                allowNull: true,
                defaultValue: 0
            },
            TB01008_RETIR: {
                type: DataTypes.STRING(1),
                allowNull: true,
                defaultValue: "N"
            },
            TB01008_ALIQIR: {
                type: DataTypes.DECIMAL(11, 2),
                allowNull: true,
                defaultValue: 0
            },
            TB01008_RETISS: {
                type: DataTypes.STRING(1),
                allowNull: true,
                defaultValue: "N"
            },
            TB01008_ALIQISS: {
                type: DataTypes.DECIMAL(11, 2),
                allowNull: true,
                defaultValue: 0
            },
            TB01008_RETINSS: {
                type: DataTypes.STRING(1),
                allowNull: true,
                defaultValue: "N"
            },
            TB01008_MATRICULA: {
                type: DataTypes.STRING(30),
                allowNull: true
            },
            TB01008_FINANCEIRO: {
                type: DataTypes.STRING(4),
                allowNull: true
            },
            TB01008_PERCJUROS: {
                type: DataTypes.DECIMAL(11, 2),
                allowNull: true,
                defaultValue: 0.00
            },
            TB01008_DIAS: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0
            },
            TB01008_TIPOJUROS: {
                type: DataTypes.CHAR(1),
                allowNull: true
            },
            TB01008_SERASA: {
                type: DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            TB01008_NAOCONTRIBUINTE: {
                type: DataTypes.STRING(1),
                allowNull: true,
                defaultValue: "N"
            },
            TB01008_GRUPO: {
                type: DataTypes.STRING(4),
                allowNull: true,
                defaultValue: "0000",
                references: {
                    model: 'TB01107',
                    key: 'TB01107_CODIGO'
                }
            },
            TB01008_VENDEDOR2: {
                type: DataTypes.STRING(4),
                allowNull: true,
                references: {
                    model: 'TB01006',
                    key: 'TB01006_CODIGO'
                }
            },
            TB01008_FIXTABELA: {
                type: DataTypes.STRING(1),
                allowNull: true,
                defaultValue: "N"
            },
            TB01008_PRODUTORRURAL: {
                type: DataTypes.STRING(1),
                allowNull: true,
                defaultValue: "N"
            },
            TB01008_TOKEN: {
                type: DataTypes.STRING(40),
                allowNull: true
            },
            TB01008_CONSUMIDORSEMID: {
                type: DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            TB01008_PFPOSSUIRIM: {
                type: DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            TB01008_FONE0800: {
                type: DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            TB01008_SENHA: {
                type: DataTypes.STRING(10),
                allowNull: true
            },
            TB01008_USUARIO: {
                type: DataTypes.STRING(10),
                allowNull: true
            }
        },
        {
            sequelize,
            tableName: 'TB01008',
            schema: 'dbo',
            timestamps: false
        }
        )
    }
}

module.exports = TB01008;