import { CategoryDescription, CategoryId, CategoryName } from './value-objects'
import { CategoryStatus } from './value-objects/category-status'
import Category, { CategoryProperties } from './category'

export default class CategoryFactory {
  create(name: CategoryName, description: CategoryDescription, status: CategoryStatus): Category {
    const categoryProperties: CategoryProperties = {
      id: CategoryId.random(),
      name,
      description,
      status,
    }

    return new Category(categoryProperties)
  }
}
