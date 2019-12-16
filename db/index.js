const pgp = require('pg-promise')();

const db = pgp(process.env.DATABASE_URL||'postgres://mek212:Mek123@localhost:5422/chuck_norris');


module.exports = db;