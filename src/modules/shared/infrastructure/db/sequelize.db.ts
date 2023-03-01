import { Sequelize } from 'sequelize'

import { databaseEnv } from '../../../../helpers/config'

const sequelize = new Sequelize(databaseEnv.database, databaseEnv.username, databaseEnv.password, {
  host: databaseEnv.host,
  port: Number(databaseEnv.port),
  dialect: 'mysql',
})

export default sequelize
