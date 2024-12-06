
exports.up = function(knex) {
  return knex.schema
    .dropTable('estoque')

};

exports.down = function(knex) {
  return knex.schema
    .createTable('estoque', async function (table) {
      table.increments('id').primary().notNullable().unique();
      table.string('nome', 255);
      table.string('descricao', 255);
      table.string('quantidade', 255);
    })
};
