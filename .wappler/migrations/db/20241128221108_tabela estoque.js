
exports.up = function(knex) {
  return knex.schema
    .createTable('estoque', async function (table) {
      table.increments('id');
      table.string('nome');
      table.string('descricao');
      table.string('quantidade');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('estoque')
};
