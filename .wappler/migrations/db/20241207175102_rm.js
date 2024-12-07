
exports.up = function(knex) {
  return knex.schema
    .dropTable('empreendimentos')

};

exports.down = function(knex) {
  return knex.schema
    .createTable('empreendimentos', async function (table) {
      table.increments('id').primary().notNullable().unique();
      table.string('nome', 255);
      table.string('localizacao', 255);
      table.string('area_total', 255);
      table.date('data_inicio');
      table.date('data_entrega');
      table.string('tipo', 255);
      table.integer('id_empresa').unsigned();
      table.foreign('id_empresa').references('id').inTable('Empresas').onUpdate('SET NULL').onDelete('SET NULL');
      table.string('token_empreendimento', 255);
    })
};
