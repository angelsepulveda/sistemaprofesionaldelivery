import { ContainerModule } from 'inversify'

import { ExistCategoryByName } from '../../application/services'
import { CategoryCreator, CategoryFinder, CategoryLister } from '../../application/use-cases'
import { CategoryRepository } from '../../domain/category.repository'
import CategorySequelizeRepository from '../db/category-sequelize.repository'
import {
  CategoryCreatorPostController,
  CategoryFinderGetController,
  CategoryListerGetController,
} from '../http/controllers'

//registro de dependencias
export const CategoryContainer = new ContainerModule(bind => {
  bind<CategoryRepository>('CategoryRepository').to(CategorySequelizeRepository)
  bind<CategoryCreator>(CategoryCreator).toSelf()
  bind<CategoryCreatorPostController>(CategoryCreatorPostController).toSelf()
  bind<CategoryLister>(CategoryLister).toSelf()
  bind<CategoryListerGetController>(CategoryListerGetController).toSelf()
  bind<CategoryFinder>(CategoryFinder).toSelf()
  bind<CategoryFinderGetController>(CategoryFinderGetController).toSelf()
  bind<ExistCategoryByName>(ExistCategoryByName).toSelf()
})
