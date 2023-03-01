import { Request, Response } from 'express'
import { inject, injectable } from 'inversify'

import { CategoryLister } from '../../../../application/use-cases'

@injectable()
export class CategoryListerGetController {
  constructor(@inject(CategoryLister) private readonly categoryLister: CategoryLister) {}

  async handle(req: Request, res: Response): Promise<void> {
    const data = await this.categoryLister.handle()
    res.status(200).json(data)
  }
}
