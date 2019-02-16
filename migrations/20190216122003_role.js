
exports.up = (knex, Promise) => Promise.all([
  knex.schema.createTable('role', (t) => {
    t.increments();
    t.text('name').notNullable();
  })
]);

exports.down = (knex, Promise) => Promise.all([
  knex.schema.dropTableIfExists('role')
]);
