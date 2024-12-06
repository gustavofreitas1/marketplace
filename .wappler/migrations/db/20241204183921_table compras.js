
exports.up = function(knex) {
  return knex.schema
    .createTable('compras', async function (table) {
      table.increments('id');
      table.string('nome');
      table.string('descricao');
      table.string('unidade');
      table.string('quantidade');
      table.date('data_envio');
      table.date('data_entrega');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('compras')
};
