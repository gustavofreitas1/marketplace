
exports.up = function(knex) {
  return knex.schema
    .table('orcamento_solicitacao', async function (table) {
      table.dropForeign('fornecedor_id');
      table.dropColumn('fornecedor_id');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('orcamento_solicitacao', async function (table) {
      table.integer('fornecedor_id').unsigned();
      table.foreign('fornecedor_id').references('id').inTable('fornecedores').onUpdate('SET NULL').onDelete('SET NULL');
    })
};
