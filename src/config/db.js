const config_knex = {
    client: 'mysql2',
    connection: {
      // host : '127.0.0.1',
      // port : 3306,
      // user : 'root',
      // password : '',
      // database : 'dana_desa'
      host : "us-east.connect.psdb.cloud",
      port : "3306",
      user : "tsnq8vj0gw5r69nnjtlk",
      password : "pscale_pw_uduJ3jzHoRNuDC1Gb0OgCF8nYwwnqQqJ8VXQKVqzMwU",
      database : "danadesa",
      ssl:{
          "rejectUnauthorized":true
      }
    }
  }

  module.exports = require("knex")(config_knex);