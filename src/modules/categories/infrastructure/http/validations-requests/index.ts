import { body, param } from 'express-validator'

const reqCreatorSchema = [
  body('name')
    .exists()
    .withMessage('El nombre es requerido')
    .isString()
    .isLength({ min: 3, max: 50 })
    .withMessage('El nombre debe tener entre 3 y 20 caracteres'),
  body('description')
    .isLength({ min: 0, max: 50 })
    .withMessage('La descripción no debe superar los 256 caracteres'),
  body('status').exists().isBoolean(),
]

const reqUpdaterSchema = [
  param('id').exists().withMessage('el id es requerido'),
  body('name')
    .exists()
    .withMessage('El nombre es requerido')
    .isString()
    .isLength({ min: 3, max: 50 })
    .withMessage('El nombre debe tener entre 3 y 20 caracteres'),
  body('description')
    .isLength({ min: 0, max: 50 })
    .withMessage('La descripción no debe superar los 256 caracteres'),
  body('status').exists().isBoolean(),
]
export { reqCreatorSchema, reqUpdaterSchema }
