import { Router } from 'express'

import { container } from '../../../shared/infrastructure/container'
import { validateReqSchema } from '../../../shared/infrastructure/http/middlewares/validate-request'
import { CategoryCreatorPostController, CategoryFinderGetController, CategoryListerGetController } from './controllers'
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
    const finderController = container.get<CategoryFinderGetController>(CategoryFinderGetController)

    //rutas
    this.expressRouter.post('/', reqCreatorSchema, validateReqSchema, creatorController.handle.bind(creatorController))
    this.expressRouter.get('/', listerController.handle.bind(listerController))
    this.expressRouter.get('/:id',finderController.handle.bind(finderController))
  }
}

export default new CategoryRouter().expressRouter
