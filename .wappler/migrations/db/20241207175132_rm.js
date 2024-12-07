
exports.up = function(knex) {
  return knex.schema
    .dropTable('Empresas')

};

exports.down = function(knex) {
  return knex.schema
    .createTable('Empresas', async function (table) {
      table.increments('id').primary().notNullable().unique();
      table.string('nome', 255);
      table.string('cnpj', 255);
      table.string('contato', 255);
      table.string('endereco', 255);
      table.string('cidade', 255);
      table.string('cep', 255);
      table.string('estado', 255);
    })
};
