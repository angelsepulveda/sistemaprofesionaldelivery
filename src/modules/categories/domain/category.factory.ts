import Category, { CategoryProperties } from './category'
import { CategoryDescription, CategoryId, CategoryName, CategoryStatus } from './value-objects'

export default class CategoryFactory {
  static create(
    id: CategoryId,
    name: CategoryName,
    description: CategoryDescription,
    status: CategoryStatus,
  ): Category {
    const categoryProperties: CategoryProperties = {
      id,
      name,
      description,
      status,
    }

    return new Category(categoryProperties)
  }
}
