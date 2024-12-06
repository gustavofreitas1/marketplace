
exports.up = function(knex) {
  return knex.schema
    .table('estoque_materiais', async function (table) {
      table.integer('empreendimento_id').unsigned();
      table.foreign('empreendimento_id').references('id').inTable('empreendimentos').onUpdate('CASCADE').onDelete('CASCADE');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('estoque_materiais', async function (table) {
      table.dropForeign('empreendimento_id');
      table.dropColumn('empreendimento_id');
    })
};
