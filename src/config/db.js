const config_knex = {
    client: 'mysql2',
    connection: {
      host : '127.0.0.1',
      port : 3306,
      user : 'root',
      password : '',
      database : 'dana_desa'
    }
  }

  module.exports = require("knex")(config_knex);