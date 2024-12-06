
exports.up = function(knex) {
  return knex.schema
    .table('Empresas', async function (table) {
      table.renameColumn('numero_rua', 'endereco');
      table.renameColumn('rua', 'cidade');
      table.string('estado');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('Empresas', async function (table) {
      table.renameColumn('endereco', 'numero_rua');
      table.renameColumn('cidade', 'rua');
      table.dropColumn('estado');
    })
};
