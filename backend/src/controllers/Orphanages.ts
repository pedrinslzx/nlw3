import { Response, Request } from 'express'
import { getRepository } from 'typeorm'
import * as yup from 'yup'

import OrphanagesModel from '../database/models/Orphanage'
import view from '../views/orphanages.view'

export default {
  async index(req: Request, res: Response) {
    const repo = getRepository(OrphanagesModel)
    const data = await repo.find({ relations: ['images'] })
    return res.json(view.renderMany(data))
  },
  async show(req: Request, res: Response) {
    const repo = getRepository(OrphanagesModel)
    try {
      const data = await repo.findOneOrFail(req.params.id, { relations: ['images'] })
      return res.json(view.render(data))
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

    const data = {
      name,
      about,
      instructions,
      latitude,
      longitude,
      open_on_weekends,
      opening_hours,
      images
    }

    const schema = yup.object().shape({
      name: yup.string().required('Qual é o nome do orfanato?'),
      latitude: yup.number().required('O local parece estar errado, Latitude faltando'),
      longitude: yup.number().required('O local parece estar errado, Longitude faltando'),
      about: yup.string().required('Fale um pouco sobre o orfanato').max(300, 'Opa! Você escreveu bastante, tente diminuir um pouco'),
      instructions: yup.string().required('Quais são as instruções para os visitantes?'),
      opening_hours: yup.string().required('Qual é o horário de funcionamento?'),
      open_on_weekends: yup.boolean().required('É aberto nos fins de semana?'),
      images: yup.array(yup.object().shape({
        path: yup.string().required(),
        size: yup.string().required(),
      })),
    })
    await schema.validate(data, {
      abortEarly: false
    })

    const orphanage = repo.create(data)
    await repo.save(orphanage)

    return res.status(201).json({ ...orphanage })
  }
}
