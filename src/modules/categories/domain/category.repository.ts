import Category, { CategoryProperties } from './category'
import { Nullable } from '../../shared/domain/nullable'

export interface CategoryRepository {
  list(): Promise<CategoryProperties[]>
  listOne(id: string): Promise<Nullable<CategoryProperties>>
  insert(category: Category): Promise<CategoryProperties>
  update(category: Category): Promise<CategoryProperties>
}
