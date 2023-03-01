import { Application } from 'express'
import * as http from 'http'

import { portHost } from '../helpers/config'
import { loggerError, loggerInfo } from '../helpers/logger'
import { Bootstrap } from './bootstrap'



export default class extends Bootstrap {
  private readonly port: string
  constructor(private readonly app: Application) {
    super()
    this.port = portHost || '3000'
  }

  initialize(): Promise<string | Error> {
    return new Promise<string | Error>((resolve, reject) => {
      const server = http.createServer(this.app)

      server
        .listen(this.port)
        .on('listening', () => {
          resolve('Promise resolve successfully')
          loggerInfo(`listening on port http://localhost:${this.port}` )
        })
        .on('error', error => {
          reject(error)
          loggerError('error on port 3000', error)
        })
    })
  }
}
