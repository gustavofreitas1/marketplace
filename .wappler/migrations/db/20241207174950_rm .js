
exports.up = function(knex) {
  return knex.schema
    .table('auth_users', async function (table) {
      table.dropForeign('empreendimento_auth');
      table.dropColumn('empreendimento_auth');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('auth_users', async function (table) {
      table.integer('empreendimento_auth').unsigned();
      table.foreign('empreendimento_auth').references('id').inTable('empreendimentos');
    })
};
