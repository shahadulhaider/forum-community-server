
exports.up = (knex, Promise) => Promise.all([
  knex.schema.table('users', (t) => {
    t.text('image_url').notNullable();
  })
]);

exports.down = (knex, Promise) => Promise.all([
  knex.schema.table('users', (t) => {
    t.dropColumn('image_url');
  })
]);