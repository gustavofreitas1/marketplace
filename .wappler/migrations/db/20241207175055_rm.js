
exports.up = function(knex) {
  return knex.schema
    .dropTable('fornecedores')

};

exports.down = function(knex) {
  return knex.schema
    .createTable('fornecedores', async function (table) {
      table.increments('id').primary().notNullable().unique();
      table.string('nome', 255);
      table.string('email', 255);
      table.string('endereco', 255);
      table.string('telefone', 255);
      table.string('descricao', 255);
    })
};
