import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Encuesta extends BaseModel {
  @column({ isPrimary: true })
  public idCliente: number

  @column()
  public identificacionCliente: string

  @column()
  public modeloCarro: string

  @column()
  public factoresCarro: string

  @column()
  public CalificacionManejo: string

  @column()
  public CalificacionSatisfaccion: string
}
