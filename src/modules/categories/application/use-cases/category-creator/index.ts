import { inject,injectable } from 'inversify'

import Uuid from '../../../../shared/domain/uuid'
import CategoryFactory from '../../../domain/category.factory'
import { CategoryRepository } from '../../../domain/category.repository'
import { CategoryDescription, CategoryName, CategoryStatus } from '../../../domain/value-objects'

interface CategoryRequired {
  name: string
  status: boolean
}

interface CategoryOptional {
  description: string
}

type CategoryResponse = Required<CategoryRequired> & Partial<CategoryOptional>
type CategoryRequest = Required<CategoryRequired> & Partial<CategoryOptional>

@injectable()
export class CategoryCreator {
  constructor(@inject('CategoryRepository') private readonly categoryRepository: CategoryRepository) {}

  async handle(request: CategoryRequest): Promise<CategoryResponse> {
    const category = CategoryFactory.create(
      Uuid.random(),
      new CategoryName(request.name),
      new CategoryDescription(request.description),
      new CategoryStatus(request.status),
    )
    const result = await this.categoryRepository.insert(category)

    return result.toPrimitives()
  }
}
