
exports.up = function(knex) {
  return knex.schema
    .renameTable('auth_users', 'users')

};

exports.down = function(knex) {
  return knex.schema
    .renameTable('users', 'auth_users')
};
