import { Bootstrap } from './bootstrap'
import sequelize from '../modules/shared/infrastructure/db/sequelize.db'

export default class extends Bootstrap {
  constructor() {
    super()
  }

  async initialize(): Promise<string | Error | void> {
    try {
      await sequelize.authenticate()
      console.log('Connection has been established successfully.')
    } catch (error) {
      console.error('Unable to connect to the database:', error)
    }
  }
}
