
exports.up = function(knex) {
  return knex.schema
    .table('cotações', async function (table) {
      table.string('data_entrega');
      table.string('valor_total');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('cotações', async function (table) {
      table.dropColumn('data_entrega');
      table.dropColumn('valor_total');
    })
};
