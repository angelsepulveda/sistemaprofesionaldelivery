import { inject, injectable } from 'inversify'

import { CategoryRepository } from '../../../domain/category.repository'
import { CategoryId, CategoryName } from '../../../domain/value-objects'

@injectable()
export class ExistCategoryByName {
  constructor(
    @inject('CategoryRepository') private readonly categoryRepository: CategoryRepository,
  ) {}

  async handle(name: CategoryName, id: CategoryId): Promise<boolean> {
    const category = await this.categoryRepository.findByName(name)

    if (category !== null) {
      return category.properties().id.value !== id.value
    }

    return false
  }
}
