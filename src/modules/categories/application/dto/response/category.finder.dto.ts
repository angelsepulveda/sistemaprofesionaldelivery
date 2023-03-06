import { DTO } from '../../../../shared/infrastructure/http/dto/response/dto'
import { CategoryProperties } from '../../../domain/category'
import { CategoryDto } from './category.dto'

export class CategoryFinderDtoMapping extends DTO<CategoryProperties, CategoryDto> {
  execute(data: CategoryProperties): CategoryDto {
    return {
      id: data.id.value,
      name: data.name.value,
      description: data.description.value,
      status: data.status.value,
    }
  }
}
