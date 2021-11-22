import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'

import connectDB from './config/db.js'

import userRoutes from './routes/userRoutes.js'

dotenv.config()

connectDB()

const app = express()
app.use(express.json())

if (process.env.NODE_ENV == 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())

app.get('/', (req, res) => {
  res.send('API is running....')
})

app.use('/api/users', userRoutes)
// app.use('/api/accounts')

//Port is used to get the port for desirable port when deploying the app in the web
const port = process.env.PORT || 5000
app.listen(port, () =>
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${port}...`
  )
)
