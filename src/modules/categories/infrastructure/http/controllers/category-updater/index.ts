import { NextFunction, Request, Response } from 'express'
import { inject, injectable } from 'inversify'

import { CategoryUpdater } from '../../../../application/use-cases'

@injectable()
export class CategoryUpdaterPutController {
  constructor(@inject(CategoryUpdater) private readonly categoryUpdater: CategoryUpdater) {}

  async handle(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { name, description, status } = req.body
      const { id } = req.params

      const data = await this.categoryUpdater.handle({
        id,
        name,
        description,
        status,
      })

      res.status(201).json(data)
    } catch (e) {
      next(e)
    }
  }
}
