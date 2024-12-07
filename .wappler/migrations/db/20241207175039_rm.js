
exports.up = function(knex) {
  return knex.schema
    .dropTable('solicitacao_compra')

};

exports.down = function(knex) {
  return knex.schema
    .createTable('solicitacao_compra', async function (table) {
      table.increments('id').primary().notNullable().unique();
      table.string('status', 255);
      table.integer('empreendimento_id').unsigned();
      table.foreign('empreendimento_id').references('id').inTable('empreendimentos').onUpdate('CASCADE').onDelete('CASCADE');
      table.date('data_envio');
      table.date('prazo_entrega');
      table.string('nome', 255);
    })
};
