const config_knex = {
    client: 'mysql2',
    connection: {
      // host : '127.0.0.1',
      // port : 3306,
      // user : 'root',
      // password : '',
      // database : 'dana_desa'
      host : "aws.connect.psdb.cloud",
      port : "3306",
      user : "rjgud5utfelc4126dcy5",
      password : "pscale_pw_rqQL7usMKSEaX9qHzv7a4RSE0beO1O04cVn86Ooo7Rl",
      database : "danadesa",
      ssl:{
          "rejectUnauthorized":true
      }
    }
  }

  module.exports = require("knex")(config_knex);