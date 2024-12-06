
exports.up = function(knex) {
  return knex.schema
    .table('cotações', async function (table) {
      table.integer('pedido_id').unsigned();
      table.foreign('pedido_id').references('id').inTable('pedidos').onUpdate('CASCADE').onDelete('CASCADE');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('cotações', async function (table) {
      table.dropForeign('pedido_id');
      table.dropColumn('pedido_id');
    })
};
