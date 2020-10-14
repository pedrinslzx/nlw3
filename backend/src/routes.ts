import { Router } from 'express'
import multer from 'multer'

import orphanagesControllers from './controllers/Orphanages'
import multerConfig from './config/upload'

const routes = Router()

const upload = multer(multerConfig)

routes.get('/orphanages', orphanagesControllers.index)
routes.get('/orphanages/:id', orphanagesControllers.show)
routes.post('/orphanages', upload.array('images'), orphanagesControllers.create)

export default routes
