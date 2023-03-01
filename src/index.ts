import Application from './app'
import { Bootstrap } from './bootstrap/bootstrap'
import DatabaseBootstrap from './bootstrap/database.bootstrap'
import ServerBootstrap from './bootstrap/server.bootstrap'
import { loggerError, loggerInfo } from './helpers/logger'

const serverBootstrap: Bootstrap = new ServerBootstrap(Application)
const databaseBootstrap: Bootstrap = new DatabaseBootstrap()

;(async () => {
  try {
    const resultServer = await serverBootstrap.initialize()
    await databaseBootstrap.initialize()
    loggerInfo(resultServer)
  } catch (error) {
    loggerError('error in the application', error)
  }
})()
