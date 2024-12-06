
exports.up = function(knex) {
  return knex.schema
    .table('cotações', async function (table) {
      table.date('data_validade');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('cotações', async function (table) {
      table.dropColumn('data_validade');
    })
};
