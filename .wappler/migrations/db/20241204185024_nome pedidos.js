
exports.up = function(knex) {
  return knex.schema
    .renameTable('compras', 'pedidos')

};

exports.down = function(knex) {
  return knex.schema
    .renameTable('pedidos', 'compras')
};
