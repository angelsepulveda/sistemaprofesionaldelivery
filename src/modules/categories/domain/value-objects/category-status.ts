import BooleanValueObject from '../../../shared/domain/boolean.value-object'

export class CategoryStatus extends BooleanValueObject {
  constructor(value: boolean) {
    super(value)
  }
}
