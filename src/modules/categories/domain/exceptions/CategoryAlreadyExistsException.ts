import DomainException from '../../../shared/domain/DomainException'

export class CategoryAlreadyExistsException extends DomainException {
  constructor () {
    super('La categoría ya se encuentra registrada')
  }
}