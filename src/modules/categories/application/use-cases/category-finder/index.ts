import { inject,injectable } from 'inversify'

import { Nullable } from '../../../../shared/domain/nullable'
import { CategoryRepository } from '../../../domain/category.repository'
import { CategoryId } from '../../../domain/value-objects'

interface CategoryRequired {
  name: string
  status: boolean
}

interface CategoryOptional {
  description: string
}

type CategoryResponse = Required<CategoryRequired> & Partial<CategoryOptional>

@injectable()
export class CategoryFinder {
  constructor(@inject('CategoryRepository') private readonly categoryRepository: CategoryRepository) {}

  async handle(
    id: string
  ): Promise<Nullable<CategoryResponse>> {
    const result = await this.categoryRepository.listOne(new CategoryId(id))

    if (result !== null) {
      return result.toPrimitives()
    }

    return null
  }
}