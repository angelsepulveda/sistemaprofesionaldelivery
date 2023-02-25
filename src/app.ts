import express, { Application } from 'express'
import routerHealth from './helpers/health'
import HandlerErrors from './helpers/errors'
import routerCategory from './modules/categories/infrastructure/http/router'

class App {
  readonly expressApp: Application

  constructor() {
    this.expressApp = express()
    this.mountHealthCheck()
    this.mountRoutes()
    this.mountErrors()
  }

  mountHealthCheck(): void {
    this.expressApp.use('/', routerHealth)
  }

  mountRoutes(): void {
    this.expressApp.use('/category', routerCategory)
  }

  mountErrors(): void {
    this.expressApp.use(HandlerErrors.notFound)
  }
}

export default new App().expressApp
