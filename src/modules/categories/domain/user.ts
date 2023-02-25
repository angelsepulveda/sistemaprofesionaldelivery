import { Entity } from '../../shared/domain/Entity'

interface CategoryRequired {
  name: string
  status: boolean
}

interface CategoryOptional {
  description: string
  id: string
}

type CategoryUpdate = {
  name: string
  description: string
  status: boolean
}

export type CategoryProperties = Required<CategoryRequired> & Partial<CategoryOptional>

export default class User implements Entity<CategoryProperties, CategoryUpdate> {
  private id: string
  private name: string
  private description: string
  private status: boolean

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
    this.status = false
  }
}
