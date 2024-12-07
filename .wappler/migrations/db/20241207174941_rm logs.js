
exports.up = function(knex) {
  return knex.schema
    .dropTable('logs')

};

exports.down = function(knex) {
  return knex.schema
    .createTable('logs', async function (table) {
      table.increments('id').primary().notNullable().unique();
      table.string('erro', 255);
      table.integer('empreendimento_id').unsigned();
      table.foreign('empreendimento_id').references('id').inTable('empreendimentos').onUpdate('CASCADE').onDelete('CASCADE');
    })
};
