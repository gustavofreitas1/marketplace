
exports.up = function(knex) {
  return knex.schema
    .renameTable('solicitação_compra', 'solicitacao_compra')

};

exports.down = function(knex) {
  return knex.schema
    .renameTable('solicitacao_compra', 'solicitação_compra')
};
