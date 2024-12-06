
exports.up = function(knex) {
  return knex.schema
    .createTable('solicitação_compra', async function (table) {
      table.increments('id');
      table.string('data_envio');
      table.string('data_entrega');
      table.string('status');
    })
    .table('item_solicitação', async function (table) {
      table.dropColumn('data_envio');
      table.dropColumn('prazo_entrega');
      table.dropColumn('status');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('item_solicitação', async function (table) {
      table.date('data_envio');
      table.date('prazo_entrega');
      table.string('status', 255);
    })
    .dropTable('solicitação_compra')
};
