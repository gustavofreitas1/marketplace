
exports.up = function(knex) {
  return knex.schema
    .table('pedido_orcamentos', async function (table) {
      table.string('fornecedor');
      table.date('data_entrega');
      table.string('status');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('pedido_orcamentos', async function (table) {
      table.dropColumn('fornecedor');
      table.dropColumn('data_entrega');
      table.dropColumn('status');
    })
};
