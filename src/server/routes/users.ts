import { Request, Response, Router } from 'express'

const userRouter = Router()

userRouter.get('/', function (req: Request, res: Response) {
  res.json({ result: 'respond with a resource' })
})

export default userRouter
