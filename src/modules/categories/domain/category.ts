import { Entity } from '../../shared/domain/entity'
import { CategoryDescription, CategoryId, CategoryName, CategoryStatus } from './value-objects'

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

type CategoryPrimitives = {
  id: string
  name: string
  description: string
  status: boolean
}

export type CategoryProperties = Required<CategoryRequired> & Partial<CategoryOptional>

export default class Category implements Entity<CategoryProperties, CategoryUpdate, CategoryPrimitives> {
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

  toPrimitives(): CategoryPrimitives {
    return {
      id: this.id.value,
      name: this.name.value,
      description: this.description.value,
      status: this.status.value,
    }
  }
  update(fields: CategoryUpdate) {
    Object.assign(this, fields)
  }

  delete() {
    this.status = new CategoryStatus(false)
  }
}
