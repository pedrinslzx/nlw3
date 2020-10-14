import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import helmet from 'helmet'
import { resolve } from 'path'

import 'express-async-errors'
import './database/connection'

import routes from './routes'
import errorHandler from './utils/error.handler'

const app = express()

app.use(express.json())
app.use(cors({
  origin: ['http://localhost:3000', 'http://happy-pedrinholemes.vercel.app']
}))
app.use(helmet())
app.use(morgan('dev'))
app.use(routes)
app.use('/uploads', express.static(resolve(__dirname, '..', 'uploads')))
app.use(errorHandler)


app.listen(process.env.PORT || 3333, () => console.log('Estou pronto para receber requisições :-)'))
