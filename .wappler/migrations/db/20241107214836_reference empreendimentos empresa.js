
exports.up = function(knex) {
  return knex.schema
    .table('empreendimentos', async function (table) {
      table.integer('id_empresa').unsigned();
      table.foreign('id_empresa').references('id').inTable('Empresas').onUpdate('CASCADE').onDelete('CASCADE');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('empreendimentos', async function (table) {
      table.dropForeign('id_empresa');
      table.dropColumn('id_empresa');
    })
};
