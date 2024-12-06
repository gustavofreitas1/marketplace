
exports.up = function(knex) {
  return knex.schema
    .renameTable('cotações', 'cotações_compra')

};

exports.down = function(knex) {
  return knex.schema
    .renameTable('cotações_compra', 'cotações')
};
