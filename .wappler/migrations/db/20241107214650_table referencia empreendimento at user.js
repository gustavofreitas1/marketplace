
exports.up = function(knex) {
  return knex.schema
    .table('empreendimentos', async function (table) {
      table.integer('id_user').unsigned();
      table.foreign('id_user').references('id').inTable('auth_users').onUpdate('CASCADE').onDelete('CASCADE');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('empreendimentos', async function (table) {
      table.dropForeign('id_user');
      table.dropColumn('id_user');
    })
};
