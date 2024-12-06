
exports.up = function(knex) {
  return knex.schema
    .table('logs', async function (table) {
      table.integer('empresa_id').unsigned();
      table.foreign('empresa_id').references('id').inTable('Empresas').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('empreendimento_id').unsigned();
      table.foreign('empreendimento_id').references('id').inTable('empreendimentos').onUpdate('CASCADE').onDelete('CASCADE');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('logs', async function (table) {
      table.dropForeign('empresa_id');
      table.dropColumn('empresa_id');
      table.dropForeign('empreendimento_id');
      table.dropColumn('empreendimento_id');
    })
};
