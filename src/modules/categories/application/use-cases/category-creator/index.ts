import { CategoryRepository } from '../../../domain/category.repository'
import CategoryFactory from '../../../domain/category.factory'
import Uuid from '../../../../shared/domain/uuid'
import { CategoryDescription, CategoryName, CategoryStatus } from '../../../domain/value-objects'

interface CategoryRequired {
  id: string
  name: string
  status: boolean
}

interface CategoryOptional {
  description: string
}

export type CategoryResponse = Required<CategoryRequired> & Partial<CategoryOptional>
export type CategoryRequest = Required<CategoryRequired> & Partial<CategoryOptional>
export class CategoryCreator {
  constructor(private readonly categoryRepository: CategoryRepository) {}

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
