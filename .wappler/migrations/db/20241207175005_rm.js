
exports.up = function(knex) {
  return knex.schema
    .dropTable('orcamento_etapa')

};

exports.down = function(knex) {
  return knex.schema
    .createTable('orcamento_etapa', async function (table) {
      table.increments('id').primary().notNullable().unique();
      table.string('nome', 255);
      table.string('descricao', 255);
      table.string('valor_total', 255);
      table.integer('empreendimento_id').unsigned();
      table.foreign('empreendimento_id').references('id').inTable('empreendimentos').onUpdate('CASCADE').onDelete('CASCADE');
    })
};
