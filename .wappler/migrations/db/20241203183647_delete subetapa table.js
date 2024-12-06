
exports.up = function(knex) {
  return knex.schema
    .dropTable('orcamento_subetapa')

};

exports.down = function(knex) {
  return knex.schema
    .createTable('orcamento_subetapa', async function (table) {
      table.increments('id').primary().notNullable().unique();
      table.string('descricao', 255);
      table.string('unidade', 255);
      table.float('quantidade');
      table.string('preco_unitario', 255);
      table.string('preco_total', 255);
      table.integer('etapa_id').unsigned();
      table.foreign('etapa_id').references('id').inTable('orcamento_etapa').onUpdate('CASCADE').onDelete('CASCADE');
      table.string('nome', 255);
    })
};
