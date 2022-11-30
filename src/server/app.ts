import express from 'express'
import path from 'path'
import indxRouter from './routes/index'
import userRouter from './routes/users'

const app = express()
// const port = 3333

// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
// app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indxRouter)
// app.use('/users', userRouter)

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

export default app
