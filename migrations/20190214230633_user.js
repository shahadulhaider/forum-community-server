
exports.up = (knex, Promise) => Promise.all([
  knex.schema.createTable('users', (t) => {
    t.increments();
    t.text('display_name').notNullable();
    t.text('email').notNullable();
    t.text('google_id').notNullable();
    t.boolean('banned').notNullable().default(false);
  })
]);

exports.down = (knex, Promise) => Promise.all([
  knex.schema.dropTableIfExists('users')
]);
