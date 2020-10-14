import express from 'express'

import morgan from 'morgan'
import cors from 'cors'
import helmet from 'helmet'

import './database/connection'
import routes from './routes'

const app = express()

app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))
app.use(routes)


app.listen(process.env.PORT || 3333, () => console.log(':-)'))
