import { DTO } from '../../../../shared/infrastructure/http/dto/response/dto'
import { CategoryProperties } from '../../../domain/category'

export interface CategoryCreatorDto {
  id: string
}
export class CategoryCreatorDtoMapping extends DTO<CategoryProperties, CategoryCreatorDto> {
  execute(data: CategoryProperties): CategoryCreatorDto {
    return {
      id: data.id.value,
    }
  }
}
