import { inject, injectable } from 'inversify'

import { Nullable } from '../../../../shared/domain/nullable'
import { CategoryRepository } from '../../../domain/category.repository'
import { CategoryId } from '../../../domain/value-objects'
import { CategoryDto, CategoryFinderDtoMapping } from '../../dto'

@injectable()
export class CategoryFinder {
  constructor(
    @inject('CategoryRepository') private readonly categoryRepository: CategoryRepository,
  ) {}

  async handle(id: string): Promise<Nullable<CategoryDto>> {
    const category = await this.categoryRepository.listOne(new CategoryId(id))

    if (category !== null) {
      return new CategoryFinderDtoMapping().execute(category.properties())
    }

    return null
  }
}
