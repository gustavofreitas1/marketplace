
exports.up = function(knex) {
  return knex.schema
    .table('orcamento_subetapa', async function (table) {
      table.integer('etapa_id').unsigned();
      table.foreign('etapa_id').references('id').inTable('orcamento_etapa').onUpdate('CASCADE').onDelete('CASCADE');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('orcamento_subetapa', async function (table) {
      table.dropForeign('etapa_id');
      table.dropColumn('etapa_id');
    })
};
