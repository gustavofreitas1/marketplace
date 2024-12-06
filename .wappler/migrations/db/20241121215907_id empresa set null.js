
exports.up = function(knex) {
  return knex.schema
    .table('empreendimentos', async function (table) {
      table.dropForeign('id_empresa');
      table.foreign('id_empresa').references('id').inTable('Empresas').onUpdate('SET NULL').onDelete('SET NULL');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('empreendimentos', async function (table) {
      table.dropForeign('id_empresa');
      table.foreign('id_empresa').references('id').inTable('Empresas').onUpdate('CASCADE').onDelete('CASCADE');
    })
};
