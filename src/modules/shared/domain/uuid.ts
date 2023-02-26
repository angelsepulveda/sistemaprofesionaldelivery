import ValueObject from './value-object'
import { v4 as uuid } from 'uuid'
import validate from 'uuid-validate'
import InvalidArgumentError from './invalid-argument.error'

export default class Uuid extends ValueObject<string> {
  constructor(value: string) {
    super(value)
    this.ensureIsValidUuid(value)
  }

  static random(): Uuid {
    return new Uuid(uuid())
  }

  private ensureIsValidUuid(id: string): void {
    if (!validate(id)) {
      throw new InvalidArgumentError('El id es invalido')
    }
  }
}
