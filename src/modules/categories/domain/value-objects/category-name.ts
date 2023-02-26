import StringValueObject from '../../../shared/domain/string.value-object'

export class CategoryName extends StringValueObject {
  constructor(value: string) {
    super(value.toUpperCase())
  }
}
