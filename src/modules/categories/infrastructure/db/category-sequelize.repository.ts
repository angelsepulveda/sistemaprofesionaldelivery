import { CategoryRepository } from '../../domain/category.repository'
import Category from '../../domain/category'
import { CategoryModel } from './category.model'
import { CategoryId, CategoryName, CategoryDescription, CategoryStatus } from '../../domain/value-objects'
import { Nullable } from '../../../shared/domain/nullable'
import CategoryFactory from '../../domain/category.factory'

export default class CategorySequelizeRepository implements CategoryRepository {
  async list(): Promise<Category[]> {
    const categories = await CategoryModel.findAll()

    return categories.map((category: CategoryModel) => {
      return CategoryFactory.create(
        new CategoryId(category.id),
        new CategoryName(category.name),
        new CategoryDescription(category.description),
        new CategoryStatus(category.status),
      )
    })
  }

  async listOne(id: CategoryId): Promise<Nullable<Category>> {
    const category = await CategoryModel.findByPk(id.value)

    if (category === null) {
      return null
    }

    return CategoryFactory.create(
      new CategoryId(category.id),
      new CategoryName(category.name),
      new CategoryDescription(category.description),
      new CategoryStatus(category.status),
    )
  }

  async insert(category: Category): Promise<Category> {
    await CategoryModel.create(category.toPrimitives())
    return category
  }

  async update(id: CategoryId, category: Category): Promise<Category> {
    const categoryModel = await CategoryModel.findByPk(id.value)

    if (!categoryModel) {
      throw new Error('Category not found')
    }

    await categoryModel.update(category.toPrimitives())

    return category
  }
}
