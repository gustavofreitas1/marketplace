
exports.up = function(knex) {
  return knex.schema
    .table('empreendimentos', async function (table) {
      table.renameColumn('token', 'token_empreendimento');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('empreendimentos', async function (table) {
      table.renameColumn('token_empreendimento', 'token');
    })
};
