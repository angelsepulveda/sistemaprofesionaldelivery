import { Request, Response } from 'express'
import { inject, injectable } from 'inversify'

import {  CategoryFinder } from '../../../../application/use-cases'

@injectable()
export class CategoryFinderGetController {
  constructor(@inject(CategoryFinder) private readonly categoryFinder: CategoryFinder) {}

  async handle(req: Request, res: Response): Promise<void> {
    const { id } = req.params

    const data = await this.categoryFinder.handle(id)

    res.status(200).json(data)
  }
}