import { Request, Router, Response } from 'express'

class CategoryRouter {
  readonly expressRouter: Router

  constructor() {
    this.expressRouter = Router()
    this.mountRoutes()
  }

  mountRoutes(): void {
    this.expressRouter.get('/', (req: Request, res: Response) => res.send('hola categoría'))
  }
}

export default new CategoryRouter().expressRouter
