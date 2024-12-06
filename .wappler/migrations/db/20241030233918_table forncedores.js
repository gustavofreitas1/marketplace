
exports.up = function(knex) {
  return knex.schema
    .createTable('fornecedores', async function (table) {
      table.increments('id');
      table.string('nome');
      table.string('email');
      table.string('endereco');
      table.string('telefone');
      table.string('descricao');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('fornecedores')
};
