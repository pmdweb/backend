module.exports = {
    dialect: 'mssql',
	username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_SERVER,				// Acesso externo ao banco de dados EXTERNO/REDE.
    //server: process.env.DB_SERVER, 				// Acesso externo ao banco de dados LOCAL.
    database: process.env.DB_DATABASE,
    options: {
        datefirst: 1,
        trustedConnection: true,
        trustServerCertificate: true,
	enableArithAbort: true,				// Acesso externo ao banco de dados EXTERNO/REDE.
	//enableArithPort: true,					// Acesso externo ao banco de dados LOCAL.
        underscored: true
    },
    port: process.env.DB_PORT
}

// CASO SEJA UM SERVIDOR LOCAL, FAVOR COMENTAR AS LINHAS 5 E 12 E DESCOMENTAR AS LINHAS 6 E 13