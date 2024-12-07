
exports.up = function(knex) {
  return knex.schema
    .dropTable('orcamento_etapa_subetapa')

};

exports.down = function(knex) {
  return knex.schema
    .createTable('orcamento_etapa_subetapa', async function (table) {
      table.increments('id').primary().notNullable().unique();
      table.integer('orcamento_etapa_id').unsigned();
      table.foreign('orcamento_etapa_id').references('id').inTable('orcamento_etapa').onUpdate('CASCADE').onDelete('CASCADE');
      table.string('nome', 255);
      table.string('descricao', 255);
      table.string('unidade', 255);
      table.string('quantidade', 255);
      table.string('preco_unitario', 255);
    })
};
