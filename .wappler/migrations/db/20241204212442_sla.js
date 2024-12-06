
exports.up = function(knex) {
  return knex.schema
    .table('solicitação_compra', async function (table) {
      table.dropColumn('data_envio');
      table.dropColumn('data_entrega');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('solicitação_compra', async function (table) {
      table.string('data_envio', 255);
      table.string('data_entrega', 255);
    })
};
