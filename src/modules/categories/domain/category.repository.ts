import { Nullable } from '../../shared/domain/nullable'
import Category from './category'
import { CategoryId } from './value-objects'

export interface CategoryRepository {
  list(): Promise<Category[]>
  listOne(id: CategoryId): Promise<Nullable<Category>>
  insert(category: Category): Promise<Category>
  update(id: CategoryId, category: Category): Promise<Category>
}
