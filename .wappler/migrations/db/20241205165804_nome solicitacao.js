
exports.up = function(knex) {
  return knex.schema
    .renameTable('pedidos_solicitação', 'pedidos_solicitacao')

};

exports.down = function(knex) {
  return knex.schema
    .renameTable('pedidos_solicitacao', 'pedidos_solicitação')
};
