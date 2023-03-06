import { Nullable } from '../../shared/domain/nullable'
import Category, { CategoryProperties } from './category'
import { CategoryId, CategoryName } from './value-objects'

export interface CategoryRepository {
  list(): Promise<CategoryProperties[]>
  listOne(id: CategoryId): Promise<Nullable<Category>>
  insert(category: Category): Promise<Category>
  findByName(name: CategoryName): Promise<Nullable<Category>>
  update(id: CategoryId, category: Category): Promise<Category>
}
