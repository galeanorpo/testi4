import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'encuestas'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.increments('idCliente').primary()
      table.string('identificacionCliente', 50).notNullable(),
        table.string('modeloCarro', 50).notNullable(),
        table.string('factoresCarro', 50).notNullable(),
        table.string('CalificacionManejo', 50).notNullable(),
        table.string('CalificacionSatisfaccion', 50).notNullable(),
        /**
         * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
         */
        table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
