
exports.up = function(knex) {
  return knex.schema
    .createTable('pedido_orcamentos', async function (table) {
      table.increments('id');
      table.integer('pedido_id').unsigned();
      table.foreign('pedido_id').references('id').inTable('pedidos').onUpdate('CASCADE').onDelete('CASCADE');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('pedido_orcamentos')
};
