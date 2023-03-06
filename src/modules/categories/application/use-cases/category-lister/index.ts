import { inject, injectable } from 'inversify'

import { CategoryRepository } from '../../../domain/category.repository'
import { CategoryDto, CategoryListDtoMapping } from '../../dto'

@injectable()
export class CategoryLister {
  constructor(
    @inject('CategoryRepository') private readonly categoryRepository: CategoryRepository,
  ) {}

  async handle(): Promise<CategoryDto[]> {
    const category = await this.categoryRepository.list()

    return new CategoryListDtoMapping().execute(category)
  }
}
