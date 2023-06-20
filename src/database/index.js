const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const TB00012 = require('../models/TB00012')	//ENDEREÇO
const TB00040 = require('../models/TB00040') 	//CONFIGURAÇÕES

const TB01007 = require('../models/TB01007')	//EMPRESA
const TB01008 = require('../models/TB01008')	//CLIENTE
const TB01010 = require('../models/TB01010')	//PRODUTOS
const TB01021 = require('../models/TB01021')	//STATUS DE VENDA
const TB01024 = require('../models/TB01024')	//TÉCNICOS
const TB01066 = require('../models/TB01066')	//DATASERVICE(USUÁRIOS)
const TB01073 = require('../models/TB01073')	//STATUS DE OS
const TB01077 = require('../models/TB01077')	//MOTORISTAS

const TB02021 = require('../models/TB02021')	//VENDAS
const TB02096 = require('../models/TB02096')	//ENTREGAS

const TB02130 = require('../models/TB02130')	//HISTÓRICO
const TB02115 = require('../models/TB02115')	//OS'S

const VW_PMD_OS = require('../models/VW_PMD_OS')				//VIEW OS
const VW_PMD_ENTREGA = require('../models/VW_PMD_ENTREGA')		//VIEW ENTREGAS

const connection = new Sequelize(dbConfig)

TB00012.init(connection) 
TB00040.init(connection) 

TB01008.init(connection)
TB01007.init(connection)
TB01010.init(connection)
TB01021.init(connection)
TB01024.init(connection)
TB01066.init(connection)
TB01073.init(connection)
TB01077.init(connection)

TB02021.init(connection)
TB02096.init(connection)

TB02115.init(connection)
TB02130.init(connection)

VW_PMD_OS.init(connection)
VW_PMD_ENTREGA.init(connection)

module.exports = connection