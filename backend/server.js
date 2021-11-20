import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'

import connectDB from './config/db.js'

dotenv.config()

connectDB()

const app = express()

if (process.env.NODE_ENV == 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())

app.get('/api/users')
app.get('/api/accounts')

app.get('/', (req, res) => {
  res.send('API is running....')
})

//Port is used to get the port for desirable port when deploying the app in the web
const port = process.env.PORT || 5000
app.listen(port, () =>
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${port}...`
  )
)
