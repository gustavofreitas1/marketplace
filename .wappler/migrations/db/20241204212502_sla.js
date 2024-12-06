
exports.up = function(knex) {
  return knex.schema
    .table('solicitação_compra', async function (table) {
      table.date('data_envio');
      table.date('prazo_entrega');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('solicitação_compra', async function (table) {
      table.dropColumn('data_envio');
      table.dropColumn('prazo_entrega');
    })
};
