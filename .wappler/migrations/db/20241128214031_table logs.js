
exports.up = function(knex) {
  return knex.schema
    .createTable('logs', async function (table) {
      table.increments('id');
      table.string('erro');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('logs')
};
