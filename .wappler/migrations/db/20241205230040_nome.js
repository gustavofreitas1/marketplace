
exports.up = function(knex) {
  return knex.schema
    .table('solicitacao_compra', async function (table) {
      table.string('nome');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('solicitacao_compra', async function (table) {
      table.dropColumn('nome');
    })
};
