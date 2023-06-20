const express = require('express')

const ReportTriagemOsController = require('./controllers/ReportTriagemOsController')
const ReportFilaOsController = require('./controllers/ReportFilaOsController')

const VW_PMD_OSController = require('./controllers/VW_PMD_OSController')
const VW_PMD_ENTREGAController = require('./controllers/VW_PMD_ENTREGAController')

const TB00012Controller = require('./controllers/TB00012Controller')
const TB00040Controller = require('./controllers/TB00040Controller')

const TB01007Controller = require('./controllers/TB01007Controller')
const TB01008Controller = require('./controllers/TB01008Controller')
const TB01010Controller = require('./controllers/TB01010Controller')
const TB01021Controller = require('./controllers/TB01021Controller')
const TB01024Controller = require('./controllers/TB01024Controller')
const TB01066Controller = require('./controllers/TB01066Controller')
const TB01073Controller = require('./controllers/TB01073Controller')
const TB01077Controller = require('./controllers/TB01077Controller')

const TB02021Controller = require('./controllers/TB02021Controller')
const TB02096Controller = require('./controllers/TB02096Controller')

const TB02115Controller = require('./controllers/TB02115Controller')
const TB02130Controller = require('./controllers/TB02130Controller')

const requestRaw = require('./controllers/requestRaw')

const routes = express.Router()

routes.get('/', (req, res) => {
    return res.json({ "STATUS DO SERVIDOR": "ONLINE"})
})

routes.get('/enderecos', TB00012Controller.index)
routes.get('/enderecoTec/:codigo', TB00012Controller.getByTecnico)
routes.get('/configs', TB00040Controller.index)

routes.get('/empresas', TB01007Controller.index)
routes.get('/empresas/:codigo', TB01007Controller.getById)
routes.get('/clientes', TB01008Controller.index)
routes.get('/clientes/:codigo', TB01008Controller.getClientById)
routes.get('/clientes/:codigo/oss', TB02115Controller.getOssByCliente)
routes.get('/produtos', TB01010Controller.index)
routes.get('/produtos/:codigo', TB01010Controller.getById)
routes.get('/statusVenda', TB01021Controller.index)
routes.get('/statusVenda/:codigo', TB01021Controller.getById)
routes.get('/tecnicos', TB01024Controller.index)
routes.get('/tecnico/:codtec', TB01024Controller.nome)
routes.get('/getUsers/', TB01066Controller.index)
routes.get('/getUsers/:username', TB01066Controller.getUserById)
routes.post('/login/', TB01066Controller.login)
routes.get('/statusOs', TB01073Controller.index)
routes.get('/statusOs/:codigo', TB01073Controller.getById)
routes.get('/motoristas', TB01077Controller.index)
routes.get('/motorista/:codigo', TB01077Controller.getById)

routes.get('/xVendas', TB02021Controller.index)
routes.get('/xVenda/:id', TB02021Controller.getVendaById)
routes.patch('/xVenda/:id', TB02021Controller.update)

routes.get('/entregas', TB02096Controller.index)
routes.get('/entregas/:id', TB02096Controller.getById)
routes.post('/entrega', TB02096Controller.store)

routes.get('/oss/', TB02115Controller.index)
routes.get('/os/:codigo', TB02115Controller.getOsById)
routes.patch('/os/:codigo', TB02115Controller.update)

routes.get('/historicos', TB02130Controller.index)
routes.get('/historicos/os/:os', TB02130Controller.getHistoricoByOs)
routes.post('/historicos', TB02130Controller.store)
routes.post('/historicoVenda', TB02130Controller.storeVenda)

routes.get('/triagem', ReportTriagemOsController.triagem)
routes.get('/fila', ReportFilaOsController.fila)
routes.get('/fila/:codtec', ReportFilaOsController.fila)
routes.get('/osCompleta', VW_PMD_OSController.index)
routes.get('/osCompleta/:codigo', VW_PMD_OSController.getById)
routes.get('/osTecnico/:id', VW_PMD_OSController.getByTecnico)
routes.get('/osTriagem', VW_PMD_OSController.getTriagem)

routes.get('/entrega', VW_PMD_ENTREGAController.index)
routes.get('/expedicao', VW_PMD_ENTREGAController.expedicao)
routes.get('/venda/:id', VW_PMD_ENTREGAController.getById)
routes.get('/entrega/:codigo', VW_PMD_ENTREGAController.getByMotorista)
routes.get('/expConfigs', VW_PMD_ENTREGAController.getConfigs)

routes.get('/raw/:table', requestRaw.raw)
routes.get('/defeitos/:codigo', requestRaw.rawDefeitosById)
routes.get('/lastStatus/:os', requestRaw.rawUltimoStatus)
routes.get('/listAreas', requestRaw.rawListaAreasIntervencao)
routes.get('/getCities/:area', requestRaw.rawGetCitiesByArea)
routes.post('/storeEntrega', requestRaw.rawStoreEntrega)
routes.patch('/updateEntrega/:codigo', requestRaw.rawUpdateEntrega)

module.exports = routes
