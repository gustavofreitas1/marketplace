
exports.up = function(knex) {
  return knex.schema
    .table('auth_users', async function (table) {
      table.dropForeign('empreendimento_auth');
      table.foreign('empreendimento_auth').references('id').inTable('empreendimentos').onUpdate('NO ACTION').onDelete('NO ACTION');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('auth_users', async function (table) {
      table.dropForeign('empreendimento_auth');
      table.foreign('empreendimento_auth').references('id').inTable('empreendimentos').onUpdate('CASCADE').onDelete('CASCADE');
    })
};
