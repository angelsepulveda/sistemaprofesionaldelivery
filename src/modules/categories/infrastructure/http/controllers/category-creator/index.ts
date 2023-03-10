import { NextFunction, Request, Response } from 'express'
import { inject, injectable } from 'inversify'

import { CategoryCreator } from '../../../../application/use-cases'

@injectable()
export class CategoryCreatorPostController {
  constructor(@inject(CategoryCreator) private readonly categoryCreator: CategoryCreator) {}

  async handle(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { name, description, status } = req.body

      const data = await this.categoryCreator.handle({
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
