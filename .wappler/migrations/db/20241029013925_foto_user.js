
exports.up = function(knex) {
  return knex.schema
    .table('auth_users', async function (table) {
      table.string('foto');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('auth_users', async function (table) {
      table.dropColumn('foto');
    })
};
