
exports.up = function(knex) {
  return knex.schema
    .dropTable('item_solicitação')

};

exports.down = function(knex) {
  return knex.schema
    .createTable('item_solicitação', async function (table) {
      table.increments('id').primary().notNullable().unique();
      table.string('nome', 255);
      table.string('descricao', 255);
      table.string('unidade', 255);
      table.string('quantidade', 255);
      table.integer('empreendimento_id').unsigned();
      table.foreign('empreendimento_id').references('id').inTable('empreendimentos').onUpdate('CASCADE').onDelete('CASCADE');
    })
};
