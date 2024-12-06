
exports.up = function(knex) {
  return knex.schema
    .table('orcamento_subetapa', async function (table) {
      table.string('nome');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('orcamento_subetapa', async function (table) {
      table.dropColumn('nome');
    })
};
