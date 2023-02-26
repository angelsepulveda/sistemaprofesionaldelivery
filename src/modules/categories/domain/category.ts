import { Entity } from '../../shared/domain/entity'
import { CategoryDescription, CategoryId, CategoryName } from './value-objects'
import { CategoryStatus } from './value-objects/category-status'

interface CategoryRequired {
  name: CategoryName
  status: CategoryStatus
}

interface CategoryOptional {
  description: CategoryDescription
  id: CategoryId
}

type CategoryUpdate = {
  name: CategoryName
  description: CategoryDescription
  status: CategoryStatus
}

export type CategoryProperties = Required<CategoryRequired> & Partial<CategoryOptional>

export default class Category implements Entity<CategoryProperties, CategoryUpdate> {
  private id: CategoryId
  private name: CategoryName
  private description: CategoryDescription
  private status: CategoryStatus

  constructor(categoryProperties: CategoryProperties) {
    Object.assign(this, categoryProperties)
  }

  properties(): CategoryProperties {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      status: this.status,
    }
  }

  update(fields: CategoryUpdate) {
    Object.assign(this, fields)
  }

  delete() {
    this.status = new CategoryStatus(false)
  }
}
