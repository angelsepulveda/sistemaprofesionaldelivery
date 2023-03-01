import { ContainerModule } from 'inversify'

import { CategoryCreator } from '../../application/use-cases/category-creator'
import { CategoryRepository } from '../../domain/category.repository'
import CategorySequelizeRepository from '../db/category-sequelize.repository'
import { CategoryCreatorPostController } from '../http/controllers'

//registro de dependencias
export const CategoryContainer = new ContainerModule(bind => {
  bind<CategoryRepository>('CategoryRepository').to(CategorySequelizeRepository)
  bind<CategoryCreator>(CategoryCreator).toSelf()
  bind<CategoryCreatorPostController>(CategoryCreatorPostController).toSelf()
})
