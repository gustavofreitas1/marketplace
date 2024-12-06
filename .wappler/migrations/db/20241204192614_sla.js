
exports.up = function(knex) {
  return knex.schema
    .table('cotações', async function (table) {
      table.dropColumn('data_entrega');
      table.string('status');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('cotações', async function (table) {
      table.string('data_entrega', 255);
      table.dropColumn('status');
    })
};
