const knex = require('knex');

const environment = process.env.NODE_ENV || 'development';
const knexConfig = require('../knexfile');

const environmentConfig = knexConfig[environment];


module.exports = knex(environmentConfig);
