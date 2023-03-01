import { loggerError, loggerInfo } from '../helpers/logger'
import sequelize from '../modules/shared/infrastructure/db/sequelize.db'
import { Bootstrap } from './bootstrap'

export default class extends Bootstrap {
  constructor() {
    super()
  }

  async initialize(): Promise<string | Error | void> {
    try {
      await sequelize.authenticate()
      loggerInfo('Connection has been established successfully.')
    } catch (error) {
      loggerError('Unable to connect to the database:', error)
    }
  }
}
