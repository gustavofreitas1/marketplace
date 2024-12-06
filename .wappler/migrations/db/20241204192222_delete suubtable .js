
exports.up = function(knex) {
  return knex.schema
    .dropTable('pedido_orcamentos')

};

exports.down = function(knex) {
  return knex.schema
    .createTable('pedido_orcamentos', async function (table) {
      table.increments('id').primary().notNullable().unique();
      table.integer('pedido_id').unsigned();
      table.foreign('pedido_id').references('id').inTable('pedidos').onUpdate('CASCADE').onDelete('CASCADE');
      table.string('fornecedor', 255);
      table.date('data_entrega');
      table.string('status', 255);
      table.integer('fornecedor_id').unsigned();
      table.foreign('fornecedor_id').references('id').inTable('fornecedores');
    })
};
