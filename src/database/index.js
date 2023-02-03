const typeorm = require('typeorm');
const dotenv = require('dotenv');
const { userEntity } = require('../entities/user.entity');

dotenv.config();

const db = new typeorm.DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATAPASE_DB,
  synchronize: true,
  entities: [userEntity]
})

module.exports = {
  db
}