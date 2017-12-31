module.exports = {
  "development": {
    "username": "bobbyh",
    "password": null,
    "database": "jobby_dev",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "jobby_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.SQL_USER,
    "password": process.env.SQL_PASSWORD,
    "database": process.env.SQL_DATABASE,
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
