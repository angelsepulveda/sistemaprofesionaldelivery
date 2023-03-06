import { inject, injectable } from 'inversify'

import { CategoryRepository } from '../../../domain/category.repository'
import { CategoryDto } from '../../../infrastructure/http/dto/response/category.dto'
import { CategoryListDtoMapping } from '../../../infrastructure/http/dto/response/category.list.dto'

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
