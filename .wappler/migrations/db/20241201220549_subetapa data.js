
exports.up = function(knex) {
  return knex.schema
    .table('orcamento_etapa_subetapa', async function (table) {
      table.string('nome');
      table.string('descricao');
      table.string('unidade');
      table.string('quantidade');
      table.string('preco_unitario');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('orcamento_etapa_subetapa', async function (table) {
      table.dropColumn('nome');
      table.dropColumn('descricao');
      table.dropColumn('unidade');
      table.dropColumn('quantidade');
      table.dropColumn('preco_unitario');
    })
};
