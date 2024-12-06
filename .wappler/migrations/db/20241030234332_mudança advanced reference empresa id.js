
exports.up = function(knex) {
  return knex.schema
    .table('auth_users', async function (table) {
      table.dropForeign('empresa_id');
      table.foreign('empresa_id').references('id').inTable('Empresas').onUpdate('SET NULL').onDelete('SET NULL');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('auth_users', async function (table) {
      table.dropForeign('empresa_id');
      table.foreign('empresa_id').references('id').inTable('Empresas').onUpdate('CASCADE').onDelete('CASCADE');
    })
};
