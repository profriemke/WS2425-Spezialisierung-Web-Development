import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  async up() {
    this.schema.alterTable('notes', (table) => {
      table.string('author')
    })
  }
  async down() {
    this.schema.alterTable('notes', (table) => {
      table.dropColumn('author')
    })
  }
}