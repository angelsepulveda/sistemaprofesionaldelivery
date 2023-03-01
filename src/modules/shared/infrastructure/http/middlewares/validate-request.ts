import { NextFunction,Request, Response } from 'express'
import { ValidationError, validationResult } from 'express-validator'
import httpStatus from 'http-status'

export function validateReqSchema(req: Request, res: Response, next: NextFunction) {
  const validationErrors = validationResult(req)
  if (validationErrors.isEmpty()) {
    return next()
  }
  const errors = validationErrors.array().map((err: ValidationError) => ({ [err.param]: err.msg }))

  return res.status(httpStatus.UNPROCESSABLE_ENTITY).json({
    errors,
  })
}
