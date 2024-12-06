
exports.up = function(knex) {
  return knex.schema
    .createTable('orcamento_etapa', async function (table) {
      table.increments('id');
      table.string('nome');
      table.string('descricao');
      table.string('valor_total');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('orcamento_etapa')
};
