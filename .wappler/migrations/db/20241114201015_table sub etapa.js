
exports.up = function(knex) {
  return knex.schema
    .createTable('orcamento_subetapa', async function (table) {
      table.increments('id');
      table.string('descricao');
      table.string('unidade');
      table.float('quantidade');
      table.string('preco_unitario');
      table.string('preco_total');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('orcamento_subetapa')
};
