
exports.up = function(knex) {
  return knex.schema
    .table('auth_users', async function (table) {
      table.dropForeign('user_empreendimento');
      table.dropColumn('user_empreendimento');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('auth_users', async function (table) {
      table.integer('user_empreendimento').unsigned();
      table.foreign('user_empreendimento').references('id').inTable('empreendimentos');
    })
};
