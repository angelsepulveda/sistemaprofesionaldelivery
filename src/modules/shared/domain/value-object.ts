import InvalidArgumentError from './invalid-argument.error'

type Primitives = string | number | boolean | Date

export default abstract class ValueObject<T extends Primitives> {
  readonly value: T

  protected constructor(value: T) {
    this.value = value
    this.ensureValueIsDefined(value)
  }

  private ensureValueIsDefined(value: T): void {
    if (value === null || value === undefined) {
      throw new InvalidArgumentError('value objects invalido')
    }
  }

  equals(other: ValueObject<T>): boolean {
    return other.constructor.name === this.constructor.name && other.value === this.value
  }

  toString(): string {
    return this.value.toString()
  }
}
