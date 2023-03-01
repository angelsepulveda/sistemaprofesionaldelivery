import { Router } from 'express'

import { container } from '../../../shared/infrastructure/container'
import { validateReqSchema } from '../../../shared/infrastructure/http/middlewares/validate-request'
import { CategoryCreatorPostController, CategoryListerGetController } from './controllers'
import { reqCreatorSchema } from './validations-requests'

class CategoryRouter {
  readonly expressRouter: Router

  constructor() {
    this.expressRouter = Router()
    this.mountRoutes()
  }

  mountRoutes(): void {
    //controladores
    const creatorController = container.get<CategoryCreatorPostController>(CategoryCreatorPostController)
    const listerController = container.get<CategoryListerGetController>(CategoryListerGetController)

    //rutas
    this.expressRouter.post('/', reqCreatorSchema, validateReqSchema, creatorController.handle.bind(creatorController))
    this.expressRouter.get('/', listerController.handle.bind(listerController))
  }
}

export default new CategoryRouter().expressRouter
