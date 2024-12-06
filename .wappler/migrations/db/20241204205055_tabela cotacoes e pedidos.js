
exports.up = function(knex) {
  return knex.schema
    .createTable('cotações_compra', async function (table) {
      table.increments('id');
      table.string('observação');
      table.string('valor_total');
    })
    .createTable('pedidos_solicitação', async function (table) {
      table.increments('id');
      table.string('nome');
      table.string('descrição');
      table.string('unidade');
      table.string('quantidade');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('pedidos_solicitação')
    .dropTable('cotações_compra')
};
