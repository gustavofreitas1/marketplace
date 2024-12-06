
exports.up = function(knex) {
  return knex.schema
    .table('auth_users', async function (table) {
      table.dropForeign('empreendimentos_id');
      table.dropColumn('empreendimentos_id');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('auth_users', async function (table) {
      table.integer('empreendimentos_id').unsigned();
      table.foreign('empreendimentos_id').references('id').inTable('empreendimentos').onUpdate('SET NULL').onDelete('SET NULL');
    })
};
