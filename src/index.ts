import ServerBootstrap from './bootstrap/server.bootstrap'
import Application from './app'
import { Bootstrap } from './bootstrap/bootstrap'
import DatabaseBootstrap from './bootstrap/database.bootstrap'

const serverBootstrap: Bootstrap = new ServerBootstrap(Application)
const databaseBootstrap: Bootstrap = new DatabaseBootstrap()

;(async () => {
  try {
    const resultServer = await serverBootstrap.initialize()
    await databaseBootstrap.initialize()
    console.log(resultServer)
  } catch (error) {
    console.log(error)
  }
})()
