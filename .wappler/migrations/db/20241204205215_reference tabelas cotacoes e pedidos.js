
exports.up = function(knex) {
  return knex.schema
    .table('cotações_compra', async function (table) {
      table.integer('solicitação_id').unsigned();
      table.foreign('solicitação_id').references('id').inTable('solicitação_compra').onUpdate('CASCADE').onDelete('CASCADE');
    })
    .table('pedidos_solicitação', async function (table) {
      table.integer('solicitação_id').unsigned();
      table.foreign('solicitação_id').references('id').inTable('solicitação_compra').onUpdate('CASCADE').onDelete('CASCADE');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('pedidos_solicitação', async function (table) {
      table.dropForeign('solicitação_id');
      table.dropColumn('solicitação_id');
    })
    .table('cotações_compra', async function (table) {
      table.dropForeign('solicitação_id');
      table.dropColumn('solicitação_id');
    })
};
