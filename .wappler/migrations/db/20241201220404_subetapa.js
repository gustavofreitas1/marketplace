
exports.up = function(knex) {
  return knex.schema
    .createTable('orcamento_etapa_subetapa', async function (table) {
      table.increments('id');
      table.integer('orcamento_etapa_id').unsigned();
      table.foreign('orcamento_etapa_id').references('id').inTable('orcamento_etapa').onUpdate('CASCADE').onDelete('CASCADE');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('orcamento_etapa_subetapa')
};
