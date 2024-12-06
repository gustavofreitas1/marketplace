
exports.up = function(knex) {
  return knex.schema
    .table('Empresas', async function (table) {
      table.string('cnpj');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('Empresas', async function (table) {
      table.dropColumn('cnpj');
    })
};
