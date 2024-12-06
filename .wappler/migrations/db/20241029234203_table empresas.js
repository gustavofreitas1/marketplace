
exports.up = function(knex) {
  return knex.schema
    .createTable('Empresas', async function (table) {
      table.increments('id');
      table.string('nome');
    })
    .table('auth_users', async function (table) {
      table.integer('empresa_id').unsigned();
      table.foreign('empresa_id').references('id').inTable('Empresas').onUpdate('CASCADE').onDelete('CASCADE');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('auth_users', async function (table) {
      table.dropForeign('empresa_id');
      table.dropColumn('empresa_id');
    })
    .dropTable('Empresas')
};
