
exports.up = function(knex) {
  return knex.schema
    .dropTable('orcamento_solicitacao')

};

exports.down = function(knex) {
  return knex.schema
    .createTable('orcamento_solicitacao', async function (table) {
      table.increments('id').primary().notNullable().unique();
      table.string('observação', 255);
      table.string('valor_total', 255);
      table.integer('solicitação_id').unsigned();
      table.foreign('solicitação_id').references('id').inTable('solicitacao_compra').onUpdate('CASCADE').onDelete('CASCADE');
    })
};
