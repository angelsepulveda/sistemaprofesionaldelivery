import express, { Application } from 'express'
import routerHealth from './helpers/health'
import HandlerErrors from './helpers/errors'

class App {
  readonly expressApp: Application

  constructor() {
    this.expressApp = express()
    this.mountHealthCheck()
    //this.mountRoutes()
    this.mountErrors()
  }

  mountHealthCheck(): void {
    this.expressApp.use('/', routerHealth)
  }

  //mountRoutes(): void {}

  mountErrors(): void {
    this.expressApp.use(HandlerErrors.notFound)
  }
}

export default new App().expressApp
