
exports.up = function(knex) {
  return knex.schema
    .table('compras', async function (table) {
      table.renameColumn('data_entrega', 'prazo_entrega');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('compras', async function (table) {
      table.renameColumn('prazo_entrega', 'data_entrega');
    })
};
