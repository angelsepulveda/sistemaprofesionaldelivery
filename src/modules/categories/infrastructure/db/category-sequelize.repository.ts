import { injectable } from 'inversify'
import { Op } from 'sequelize'

import { Nullable } from '../../../shared/domain/nullable'
import Category, { CategoryProperties } from '../../domain/category'
import CategoryFactory from '../../domain/category.factory'
import { CategoryRepository } from '../../domain/category.repository'
import {
  CategoryDescription,
  CategoryId,
  CategoryName,
  CategoryStatus,
} from '../../domain/value-objects'
import { CategoryModel } from './category.model'

@injectable()
export default class CategorySequelizeRepository implements CategoryRepository {
  async list(): Promise<CategoryProperties[]> {
    const categories = await CategoryModel.findAll()

    return categories.map((category: CategoryModel) => {
      return {
        id: new CategoryId(category.id),
        name: new CategoryName(category.name),
        description: new CategoryDescription(category.description),
        status: new CategoryStatus(category.status),
      }
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

  async findByName(name: CategoryName): Promise<Nullable<Category>> {
    const category = await CategoryModel.findOne({
      where: { name: { [Op.like]: `%${name.value}%` } },
    })

    if (category !== null) {
      return CategoryFactory.create(
        new CategoryId(category.id),
        new CategoryName(category.name),
        new CategoryDescription(category.description),
        new CategoryStatus(category.status),
      )
    }

    return null
  }
}
