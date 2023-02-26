import { Application } from 'express'
import * as http from 'http'
import { Bootstrap } from './bootstrap'
import { loggerError, loggerInfo } from '../helpers/logger'

export default class extends Bootstrap {
  constructor(private readonly app: Application) {
    super()
  }

  initialize(): Promise<string | Error> {
    return new Promise<string | Error>((resolve, reject) => {
      const server = http.createServer(this.app)

      server
        .listen(3000)
        .on('listening', () => {
          resolve('Promise resolve successfully')
          loggerInfo('listening on port 3000')
        })
        .on('error', error => {
          reject(error)
          loggerError('error on port 3000', error)
        })
    })
  }
}
