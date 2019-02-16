
exports.up = (knex, Promise) => Promise.all([
  knex.schema.table('users', (t) => {
    t.integer('role_id').unsigned().references('id').inTable('role');
  })
]);

exports.down = (knex, Promise) => Promise.all([
  knex.schema.table('users', (t) => {
    t.dropColumn('role_id');
  })
]);
