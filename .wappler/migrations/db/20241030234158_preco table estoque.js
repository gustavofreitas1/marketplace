
exports.up = function(knex) {
  return knex.schema
    .table('estoque_materiais', async function (table) {
      table.string('preco_unitario');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('estoque_materiais', async function (table) {
      table.dropColumn('preco_unitario');
    })
};
