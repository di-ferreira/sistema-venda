import { Response, Router } from 'express'
const indxRouter = Router()

indxRouter.get('/hello', (_, res: Response) => {
  res.json({ result: 'Hello Diego Ferreira!' })
})

export default indxRouter
