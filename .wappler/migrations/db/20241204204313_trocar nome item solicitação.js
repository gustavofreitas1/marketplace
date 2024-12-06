
exports.up = function(knex) {
  return knex.schema
    .renameTable('pedidos', 'item_solicitação')

};

exports.down = function(knex) {
  return knex.schema
    .renameTable('item_solicitação', 'pedidos')
};
