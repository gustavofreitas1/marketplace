
exports.up = function(knex) {
  return knex.schema
    .createTable('auth_users', async function (table) {
      table.increments('id');
      table.string('email');
      table.string('senha');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('auth_users')
};
