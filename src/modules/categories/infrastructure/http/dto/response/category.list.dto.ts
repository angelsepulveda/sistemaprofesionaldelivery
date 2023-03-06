import { DTO } from '../../../../../shared/infrastructure/http/dto/response/dto'
import { CategoryProperties } from '../../../../domain/category'
import { CategoryDto } from './category.dto'

export type CategoryListDto = CategoryDto[]

export class CategoryListDtoMapping extends DTO<CategoryProperties[], CategoryListDto> {
  execute(data: CategoryProperties[]): CategoryListDto {
    return data.map(category => {
      return {
        id: category.id.value,
        name: category.name.value,
        description: category.description.value,
        status: category.status.value,
      }
    })
  }
}
