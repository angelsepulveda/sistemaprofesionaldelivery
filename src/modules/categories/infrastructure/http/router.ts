import { Router } from 'express'

import { container } from '../../../shared/infrastructure/container'
import { validateReqSchema } from '../../../shared/infrastructure/http/middlewares/validate-request'
import { CategoryCreatorPostController } from './controllers'
import { reqCreatorSchema } from './validations-requests'

class CategoryRouter {
  readonly expressRouter: Router

  constructor() {
    this.expressRouter = Router()
    this.mountRoutes()
  }

  mountRoutes(): void {
    const creatorController = container.get<CategoryCreatorPostController>(CategoryCreatorPostController)
    this.expressRouter.post('/', reqCreatorSchema, validateReqSchema, creatorController.handle.bind(creatorController))
  }
}

export default new CategoryRouter().expressRouter
