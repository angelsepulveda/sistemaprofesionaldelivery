import 'reflect-metadata'

import express, { Application } from 'express'

import HandlerErrors from './helpers/errors'
import routerHealth from './helpers/health'
import routerCategory from './modules/categories/infrastructure/http/router'

class App {
  readonly expressApp: Application

  constructor() {
    this.expressApp = express()
    this.initializeApp()
    this.mountHealthCheck()
    this.mountRoutes()
    this.mountErrors()
  }

  initializeApp() {
    this.expressApp.use(express.json())
    this.expressApp.use(express.urlencoded({ extended: false }))
  }
  mountHealthCheck(): void {
    this.expressApp.use('/', routerHealth)
  }

  mountRoutes(): void {
    this.expressApp.use('/categories', routerCategory)
  }

  mountErrors(): void {
    this.expressApp.use(HandlerErrors.notFound)
  }
}

export default new App().expressApp
