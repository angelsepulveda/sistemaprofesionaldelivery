import { Sequelize } from 'sequelize'

import * as dotenv from 'dotenv'
import * as process from 'process'
dotenv.config()

const database = process.env.DATABASE_NAME
const username = process.env.DATABASE_USERNAME
const password = process.env.DATABASE_PASSWORD
const host = process.env.DATABASE_HOST
const port = process.env.DATABASE_PORT

const sequelize = new Sequelize(database, username, password, {
  host: host,
  port: Number(port),
  dialect: 'mysql',
})

export default sequelize
