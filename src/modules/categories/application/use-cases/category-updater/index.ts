import { inject, injectable } from 'inversify'

import CategoryFactory from '../../../domain/category.factory'
import { CategoryRepository } from '../../../domain/category.repository'
import { CategoryAlreadyExistsException } from '../../../domain/exceptions'
import {
  CategoryDescription,
  CategoryId,
  CategoryName,
  CategoryStatus,
} from '../../../domain/value-objects'
import { CategoryDto, CategoryUpdaterDtoMapping } from '../../dto'
import { ExistCategoryByName } from '../../services'

interface CategoryRequired {
  id: string
  name: string
  status: boolean
}

interface CategoryOptional {
  description: string
}

type CategoryRequest = Required<CategoryRequired> & Partial<CategoryOptional>

@injectable()
export class CategoryUpdater {
  constructor(
    @inject('CategoryRepository') private readonly categoryRepository: CategoryRepository,
    @inject(ExistCategoryByName) private readonly existCategoryByName: ExistCategoryByName,
  ) {}

  async handle(request: CategoryRequest): Promise<CategoryDto> {
    const name = new CategoryName(request.name)
    const id = new CategoryId(request.id)

    const categoryExist = await this.existCategoryByName.handle(name, id)

    if (categoryExist) {
      throw new CategoryAlreadyExistsException()
    }
    const category = CategoryFactory.create(
      id,
      name,
      new CategoryDescription(request.description),
      new CategoryStatus(request.status),
    )

    const categoryUpdated = await this.categoryRepository.update(category.properties().id, category)

    return new CategoryUpdaterDtoMapping().execute(categoryUpdated.properties())
  }
}
