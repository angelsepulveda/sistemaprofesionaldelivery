import { inject,injectable } from 'inversify'

import { CategoryRepository } from '../../../domain/category.repository'

interface CategoryRequired {
  name: string
  status: boolean
}

interface CategoryOptional {
  description: string
}

type CategoryResponse = Required<CategoryRequired> & Partial<CategoryOptional>

@injectable()
export class CategoryLister {
  constructor(@inject('CategoryRepository') private readonly categoryRepository: CategoryRepository) {}

  async handle(): Promise<CategoryResponse[]> {
    const result = await this.categoryRepository.list()

    return result.map(data => data.toPrimitives())
  }
}