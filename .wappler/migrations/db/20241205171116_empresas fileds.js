
exports.up = function(knex) {
  return knex.schema
    .table('Empresas', async function (table) {
      table.string('contato');
      table.string('numero_rua');
      table.string('rua');
      table.string('cep');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('Empresas', async function (table) {
      table.dropColumn('contato');
      table.dropColumn('numero_rua');
      table.dropColumn('rua');
      table.dropColumn('cep');
    })
};
