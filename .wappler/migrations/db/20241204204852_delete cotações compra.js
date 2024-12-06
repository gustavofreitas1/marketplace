
exports.up = function(knex) {
  return knex.schema
    .dropTable('cotações_compra')

};

exports.down = function(knex) {
  return knex.schema
    .createTable('cotações_compra', async function (table) {
      table.increments('id').primary().notNullable().unique();
      table.integer('pedido_id').unsigned();
      table.foreign('pedido_id').references('id').inTable('item_solicitação').onUpdate('CASCADE').onDelete('CASCADE');
      table.string('valor_total', 255);
      table.integer('fornecedor_id').unsigned();
      table.foreign('fornecedor_id').references('id').inTable('fornecedores');
      table.string('status', 255);
      table.date('data_validade');
    })
};
