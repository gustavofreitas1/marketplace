
exports.up = function(knex) {
  return knex.schema
    .table('solicitacao_compra', async function (table) {
      table.date('prazo_entrega').alter();
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('solicitacao_compra', async function (table) {
      table.string('prazo_entrega', 255).alter();
    })
};
