
exports.up = function(knex) {
  return knex.schema
    .renameTable('cotações_compra', 'cotacoes_compra')

};

exports.down = function(knex) {
  return knex.schema
    .renameTable('cotacoes_compra', 'cotações_compra')
};
