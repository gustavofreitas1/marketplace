
exports.up = function(knex) {
  return knex.schema
    .table('compras', async function (table) {
      table.string('status');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('compras', async function (table) {
      table.dropColumn('status');
    })
};
