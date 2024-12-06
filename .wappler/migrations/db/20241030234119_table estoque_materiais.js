
exports.up = function(knex) {
  return knex.schema
    .createTable('estoque_materiais', async function (table) {
      table.increments('id');
      table.string('descricao_material');
      table.string('nome');
      table.string('quantidade');
      table.string('unidade');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('estoque_materiais')
};
