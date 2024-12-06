
exports.up = function(knex) {
  return knex.schema
    .dropTable('pedidos_solicitacao')

};

exports.down = function(knex) {
  return knex.schema
    .createTable('pedidos_solicitacao', async function (table) {
      table.increments('id').primary().notNullable().unique();
      table.string('nome', 255);
      table.string('descrição', 255);
      table.string('unidade', 255);
      table.string('quantidade', 255);
      table.integer('solicitação_id').unsigned();
      table.foreign('solicitação_id').references('id').inTable('solicitacao_compra').onUpdate('CASCADE').onDelete('CASCADE');
    })
};
