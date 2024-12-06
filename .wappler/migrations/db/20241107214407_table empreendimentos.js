
exports.up = function(knex) {
  return knex.schema
    .createTable('empreendimentos', async function (table) {
      table.increments('id');
      table.string('nome');
      table.string('localizacao');
      table.string('area_total');
      table.date('data_inicio');
      table.date('data_entrega');
      table.string('tipo');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('empreendimentos')
};
