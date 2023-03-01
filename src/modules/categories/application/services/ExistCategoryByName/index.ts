import { inject,injectable } from 'inversify'

import { CategoryRepository } from '../../../domain/category.repository'
import {  CategoryName } from '../../../domain/value-objects'

@injectable()
export class ExistCategoryByName {
  constructor(@inject('CategoryRepository') private readonly categoryRepository: CategoryRepository) {}

  async handle(name: CategoryName): Promise<boolean> {

    const result = await this.categoryRepository.findByName(name)

    return result === null;

  }
}
