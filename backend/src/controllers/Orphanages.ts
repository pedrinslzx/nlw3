import { Response, Request } from 'express'
import { getRepository } from 'typeorm'
import OrphanagesModel from '../database/models/Orphanage'
import { bytesToSize } from '../utils/size'

export default {
  async index(req: Request, res: Response) {
    const repo = getRepository(OrphanagesModel)
    const data = await repo.find({ relations: ['images'] })
    return res.json(data.map(o => ({
      ...o,
      images: o.images.map(i => ({
        ...i,
        size: {
          string: bytesToSize(i.size),
          number: i.size
        }
      }))
    })))
  },
  async show(req: Request, res: Response) {
    const repo = getRepository(OrphanagesModel)
    try {
      const data = await repo.findOneOrFail(req.params.id, { relations: ['images'] })
      return res.json({
        ...data,
        images: data.images.map(i => ({
          ...i,
          size: {
            string: bytesToSize(i.size),
            number: i.size
          }
        }))
      })
    } catch (e) {
      return res.status(404).json({
        message: 'Not Found',
        error: e.name
      })
    }
  },
  async create(req: Request, res: Response) {
    const {
      name,
      about,
      instructions,
      latitude,
      longitude,
      open_on_weekends,
      opening_hours
    } = req.body

    const repo = getRepository(OrphanagesModel)

    const reqImages = req.files as Express.Multer.File[]

    const images = reqImages.map(file => ({ path: file.filename, size: file.size }))

    const orphanage = repo.create({
      name,
      about,
      instructions,
      latitude,
      longitude,
      open_on_weekends,
      opening_hours,
      images
    })

    try {
      await repo.save(orphanage)

      return res.status(201).json({ ...orphanage })
    } catch (e) {
      return res.status(500).json({ ...e })
    }
  }
}
