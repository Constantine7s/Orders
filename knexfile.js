require("dotenv").config({
    path: "./.env.local",
  });
const pg = require("pg"); 
  
  // module.exports = {
  //   client: "pg",
  //   connection: process.env.DATABASE_URL || {
  //     // port: process.env.DB_PORT || 9000,
  //     database: process.env.DB_NAME,
  //     user: process.env.DB_USER,
  //     password: process.env.DB_PASSWORD,
  //   },
  //   migrations: {
  //     directory: "./server/db/migrations",
  //   },
  // };
  

  module.exports = {
    development: {
      client: 'pg',
      connection: {
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
      },
      migrations: {
        directory: './db/migrations',
      },
      seeds: { directory: './db/seeds' },
    },
    production: {
      client: 'pg',
      connection: {
        connectionString: process.env.DATABASE_URL
      },
      ssl: {
        rejectUnauthorised: false
      },
      migrations: {
        directory: './server/db/migrations',
      },
    },
  };
  
  
  