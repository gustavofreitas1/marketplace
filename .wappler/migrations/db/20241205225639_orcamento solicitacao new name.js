
exports.up = function(knex) {
  return knex.schema
    .renameTable('cotacoes_compra', 'orcamento_solicitacao')

};

exports.down = function(knex) {
  return knex.schema
    .renameTable('orcamento_solicitacao', 'cotacoes_compra')
};
