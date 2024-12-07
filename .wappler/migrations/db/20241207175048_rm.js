
exports.up = function(knex) {
  return knex.schema
    .dropTable('estoque_materiais')

};

exports.down = function(knex) {
  return knex.schema
    .createTable('estoque_materiais', async function (table) {
      table.increments('id').primary().notNullable().unique();
      table.string('descricao_material', 255);
      table.string('nome', 255);
      table.string('quantidade', 255);
      table.string('unidade', 255);
      table.string('preco_unitario', 255);
      table.integer('empreendimento_id').unsigned();
      table.foreign('empreendimento_id').references('id').inTable('empreendimentos').onUpdate('CASCADE').onDelete('CASCADE');
    })
};
