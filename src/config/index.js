require('dotenv').config()

const config = {
  database: {
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 5432,
    dialect: process.env.DB_DIALECT,
    schema: process.env.DB_SCHEMA,
  }
}

module.exports = config