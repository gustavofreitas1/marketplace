
exports.up = function(knex) {
  return knex.schema
    .table('cotações', async function (table) {
      table.integer('fornecedor_id').unsigned();
      table.foreign('fornecedor_id').references('id').inTable('fornecedores');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('cotações', async function (table) {
      table.dropForeign('fornecedor_id');
      table.dropColumn('fornecedor_id');
    })
};
