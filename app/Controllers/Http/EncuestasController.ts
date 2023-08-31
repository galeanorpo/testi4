import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Encuesta from 'App/Models/Encuesta'

export default class EncuestasController {
  //listar todas las encuestas
  public async index({ response }: HttpContextContract) {
    try {
      const encuesta = await Encuesta.all()
      return response.json(encuesta)
    } catch (e) {
      response.badRequest('Ups... Ha ocurrido algo...')
      throw e
    }
  }

  //crear una encuesta
  public async store({ response, request }: HttpContextContract) {
    try {
      const encuesta = request.all()
      await Encuesta.create(encuesta)
      response.ok({ msg: 'La encuesta se creo correctamente', data: encuesta })
    } catch (e) {
      response.badRequest('Ups... Ha ocurrido algo...')
      throw e
    }
  }

  //editar una encuesta
  public async update({ params, response, request }: HttpContextContract) {
    try {
      const encuesta = await Encuesta.findOrFail(params.id)
      const data = request.only([
        'identificacion_cliente',
        'modelo_carro',
        'factores_carro',
        'Calificacion_manejo',
        'Calificacion_satisfaccion',
      ])
      encuesta.merge(data)
      await encuesta.save()
      response.ok('La encuesta se edito correctamente')
    } catch (e) {
      response.badRequest('Ups... No se encontro ninguna encuesta con ese id')
    }
  }

  //eliminar una encuesta
  public async destroy({ params, response }: HttpContextContract) {
    try {
      const encuesta = await Encuesta.findOrFail(params.id)
      encuesta.delete()
      encuesta.save()
      response.ok('La encuesta se elimino correctamente')
    } catch (e) {
      response.badRequest('Ups... No se encontro ninguna encuesta con ese id')
    }
  }
}
